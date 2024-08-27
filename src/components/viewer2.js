import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {
	Scene, AmbientLight, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding,
	Group, DirectionalLight, Vector2, MeshStandardMaterial, Color, Box3, MathUtils, PMREMGenerator,
	Raycaster, TextureLoader, RepeatWrapping, Vector3, DirectionalLightHelper, Layers,
	MeshBasicMaterial, ShaderMaterial, Box3Helper, PlaneGeometry, BufferGeometry, LineDashedMaterial,
	Points, PointsMaterial, Float32BufferAttribute, SpriteMaterial, Sprite, CircleGeometry, Mesh, DoubleSide, AdditiveBlending,
	SphereBufferGeometry, Line, ReinhardToneMapping, IcosahedronGeometry,
} from 'three';
import { CSS2DRenderer } from './CSS2DRenderer.js';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

const ENTIRE_SCENE = 0, BLOOM_SCENE = 1;

const bloomLayer = new Layers();
bloomLayer.set(BLOOM_SCENE);

const params = {
	exposure: 0.8,
	bloomStrength: 1,
	bloomThreshold: 0,
	bloomRadius: 0,
};

const darkMaterial = new MeshBasicMaterial({ color: "black" });
const materials = {};

export default class Veiwer {
	constructor(container, event) {
		this.container = document.querySelector(container);
		this.event = event;
		this.containerWidth = this.container.offsetWidth
		this.containerHeight = this.container.offsetHeight
		window.addEventListener('resize', this.onWindowResize.bind(this), false)
		this.init();

		const geometry1 = new SphereBufferGeometry(5, 64, 64);
		const vs = `
    void main() {

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
        
        `

		const fs = `
        
        
        void main() {
         gl_FragColor = vec4(1.0,0.0,0.0,0.4);
        }
        
        `

		const shaderMaterial = new ShaderMaterial({
			uniforms: {
				// . . .
			},
			vertexShader: vs,
			fragmentShader: fs,
			transparent: !0
		});

		const sphere = new Mesh(geometry1, shaderMaterial);
		this.scene.add(sphere);

		const animate = () => {
			requestAnimationFrame(animate);
			this.renderBloom(true);

			// render the entire this.scene, then render bloom this.scene on top
			this.finalComposer.render();

			if (this.water) this.water.material.uniforms['time'].value += 1.0 / 60.0;
		}

		animate();


	}

	init() {
		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(this.containerWidth, this.containerHeight);
		this.renderer.toneMapping = ReinhardToneMapping;
		this.container.appendChild(this.renderer.domElement);

		this.scene = new Scene();

		this.camera = new PerspectiveCamera(40, this.containerWidth / this.containerHeight, 1, 200);
		this.camera.position.set(0, 0, 20);
		this.camera.lookAt(0, 0, 0);

		const controls = new OrbitControls(this.camera, this.renderer.domElement);
		controls.maxPolarAngle = Math.PI * 0.5;
		controls.minDistance = 1;
		controls.maxDistance = 100;

		this.scene.add(new AmbientLight(0x222222, 0.6));

		this.directionalLight = new DirectionalLight(0xC2F6F4, 1);
		this.directionalLight.position.set(0, 80, 130)
		this.scene.add(this.directionalLight);

		const helper = new DirectionalLightHelper(this.directionalLight, 50)
		this.scene.add(helper)
		const geometry1 = new SphereBufferGeometry(5, 64, 64);
		const vs = `
    void main() {

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
        
        `

		const fs = `
        
        
        void main() {
         gl_FragColor = vec4(1.0,0.0,0.0,0.4);
        }
        
        `

		const shaderMaterial = new ShaderMaterial({
			uniforms: {
				// . . .
			},
			vertexShader: vs,
			fragmentShader: fs,
			transparent: !0
		});

		const sphere = new Mesh(geometry1, shaderMaterial);
		this.scene.add(sphere);

		const renderScene = new RenderPass(this.scene, this.camera);

		const bloomPass = new UnrealBloomPass(new Vector2(this.containerWidth, this.containerHeight), 1.5, 0.4, 0.85);
		bloomPass.threshold = params.bloomThreshold;
		bloomPass.strength = params.bloomStrength;
		bloomPass.radius = params.bloomRadius;

		this.bloomComposer = new EffectComposer(this.renderer);
		this.bloomComposer.renderToScreen = false;
		this.bloomComposer.addPass(renderScene);
		this.bloomComposer.addPass(bloomPass);

		const vertexShader = `
		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}
		`
		const fragmentShader = `
		uniform sampler2D baseTexture;
			uniform sampler2D bloomTexture;

			varying vec2 vUv;

			void main() {

				gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );

			}
		`

		const finalPass = new ShaderPass(
			new ShaderMaterial({
				uniforms: {
					baseTexture: { value: null },
					bloomTexture: { value: this.bloomComposer.renderTarget2.texture }
				},
				vertexShader: vertexShader,
				fragmentShader: fragmentShader,
				defines: {}
			}), "baseTexture"
		);
		finalPass.needsSwap = true;

		this.fxaaPass = new ShaderPass(FXAAShader);

		const pixelRatio = this.renderer.getPixelRatio();

		this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.containerWidth * pixelRatio);
		this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.containerHeight * pixelRatio);

		this.finalComposer = new EffectComposer(this.renderer);
		this.finalComposer.addPass(renderScene);
		this.finalComposer.addPass(this.fxaaPass);
		this.finalComposer.addPass(finalPass);


		this.gltfLoader = new GLTFLoader();

		function disposeMaterial(obj) {

			if (obj.material) {

				obj.material.dispose();

			}

		}

		this.scene.traverse(disposeMaterial);
		this.scene.children.length = 0;

		this.models = new Group();
		this.scene.add(this.models);
		this.loadModel()

	}


	onWindowResize() {
		this.containerWidth = this.container.offsetWidth
		this.containerHeight = this.container.offsetHeight;
		this.this.camera.aspect = this.containerWidth / this.containerHeight;
		this.this.camera.updateProjectionMatrix();
		this.this.renderer.setSize(this.containerWidth, this.containerHeight)
		this.bloomComposer.setSize(this.containerWidth, this.containerHeight)
		this.finalComposer.setSize(this.containerWidth, this.containerHeight)
		this.labelRenderer.setSize(this.containerWidth, this.containerHeight)

		const pixelRatio = this.this.renderer.getPixelRatio();

		this.fxaaPass.material.uniforms['resolution'].value.x = 1 / (this.containerWidth * pixelRatio);
		this.fxaaPass.material.uniforms['resolution'].value.y = 1 / (this.containerHeight * pixelRatio);
		// this.composer.setSize(this.containerWidth, this.containerHeight);
	}


	disposeGroup(group) {
		while (group.children.length > 0) {
			const model = group.children.pop()
			model.traverse(mesh => {
				if (mesh.isMesh) {
					mesh.geometry.dispose();
					if (typeof (mesh.material) == Array) {
						const material = mesh.material.pop();
						if (!material.type) return;
						if (material.map) material.map.dispose();
						if (material) material.dispose();
					} else {
						if (!mesh.material.type) return;
						if (mesh.material.map) mesh.material.map.dispose();
						if (mesh.material) mesh.material.dispose();
					}

					// mesh.parent.remove(mesh);
				}
			})
			group.remove(model)
		}
		group = null;
	}


	clearScene() {

		this.disposeGroup(this.models);
		this.this.renderer.dispose();
	}

	loadModel() {
		this.gltfLoader.load(
			// resource URL
			'model/dimian.glb',
			// called when the resource is loaded
			(gltf) => {

				gltf.scene.traverse(mesh => {
					if (mesh.isMesh) {
						if (mesh.name === "海面01") {
							this.water = new Water(
								mesh.geometry,
								{
									textureWidth: 512,
									textureHeight: 512,
									waterNormals: new TextureLoader().load('img/waternormals.jpg', (texture) => {

										texture.wrapS = texture.wrapT = RepeatWrapping;

									}),
									// sunDirection: this.directionalLight.position.clone().normalize(),
									// sunColor: 0x000000,
									// waterColor: 0x6495ED,

									sunColor: 0xffffff,
									waterColor: 0x6495ED,
									distortionScale: 3.7,
								}
							);
							this.water.layers.enable(ENTIRE_SCENE);
							this.water.position.copy(mesh.position);
							// this.water.applyMatrix4(mesh.matrixWorld)
							this.water.rotation.x = -Math.PI / 2;
							this.water.material.uniforms.size.value = 100.0;
							// this.scene.add(this.water)
							mesh.parent.add(this.water);

							setTimeout(() => {
								mesh.geometry.dispose();
								mesh.parent.remove(mesh);
							}, 0)


						} else {
							// if (mesh.name === "散货堆场1") {
							//     console.log(mesh);
							// }
							mesh.layers.enable(BLOOM_SCENE);
						}

					}
				})


				this.scene.add(gltf.scene);

				const sky = new Sky();
				sky.scale.setScalar(1000);
				this.scene.add(sky);

				const skyUniforms = sky.material.uniforms;

				skyUniforms['turbidity'].value = 10;
				skyUniforms['rayleigh'].value = 2;
				skyUniforms['mieCoefficient'].value = 0.005;
				skyUniforms['mieDirectionalG'].value = 0.8;

				const parameters = {
					elevation: 0.0,
					azimuth: 0
				};

				// const pmremGenerator = new PMREMGenerator(this.renderer);
				const sun = new Vector3();
				const updateSun = () => {

					const phi = MathUtils.degToRad(90 - parameters.elevation);
					const theta = MathUtils.degToRad(parameters.azimuth);

					sun.setFromSphericalCoords(1, phi, theta);

					sky.material.uniforms['sunPosition'].value.copy(sun);
					// this.water.material.uniforms['sunDirection'].value.copy(sun).normalize();

					// this.scene.environment = pmremGenerator.fromScene(sky).texture;

				}

				updateSun();

			},
			// called while loading is progressing
			function (xhr) {

				console.log((xhr.loaded / xhr.total * 100) + '% loaded');

			},
			// called when loading has errors
			function (error) {

				console.log('An error happened');

			}
		);
	}

	darkenNonBloomed(obj) {

		if (obj.isMesh && bloomLayer.test(obj.layers) === false) {

			materials[obj.uuid] = obj.material;
			obj.material = darkMaterial;

		}

	}

	restoreMaterial(obj) {

		if (materials[obj.uuid]) {

			obj.material = materials[obj.uuid];
			delete materials[obj.uuid];

		}

	}


	renderBloom() {
		this.scene.traverse(this.darkenNonBloomed.bind(this));
		this.bloomComposer.render();
		this.scene.traverse(this.restoreMaterial.bind(this));

	}


}