import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {
    Scene, AmbientLight, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding,
    Group, DirectionalLight, Vector2, MeshStandardMaterial, Color, Box3, MathUtils, PMREMGenerator,
    Raycaster, TextureLoader, RepeatWrapping, Vector3, DirectionalLightHelper,
    MeshBasicMaterial,
} from 'three';
// import { CSS2DRenderer, CSS2DObject } from './CSS2DRenderer.js';
import { CSS2DRenderer } from './CSS2DRenderer.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
const TWEEN = require('@tweenjs/tween.js')
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export default class Veiwer {
    constructor(container, event) {
        this.container = document.querySelector(container);
        this.event = event;
        this.containerWidth = this.container.offsetWidth
        this.containerHeight = this.container.offsetHeight
        window.addEventListener('resize', this.onWindowResize.bind(this), false)
        this.init();
        this.isCrystal = !!0;
        this.isLattice = !!0;
        this.isSingleBuild = !!0;//是否是独立分层模型
        this.isEdit = !!0; //是否开启编辑

        this.devicesNames = [];
        this.deviceCount = 0;
        const animate = () => {

            requestAnimationFrame(animate);
            this.stats.update();

            TWEEN.update()
            // this.renderer.render(this.scene, this.camera);
            this.labelRenderer.render(this.scene, this.camera);
            this.composer.render();
            if (this.water) this.water.material.uniforms['time'].value += 1.0 / 60.0;
        }
        animate();
    }
    init() {
        this.scene = new Scene()
        this.ambientlLight = new AmbientLight(0x222222, 1)
        this.scene.add(this.ambientlLight)// 添加环境光
        // const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.0)// 添加半球光
        // this.scene.add(hemisphereLight)
        // var pointLight = new THREE.PointLight(0xffffff, 1, 10000);
        // pointLight.position.set(50, 50, 50);
        // this.scene.add(pointLight);

        this.directionalLight = new DirectionalLight(0xC2F6F4, 1);
        this.directionalLight.position.set(0, 5000, -1200)
        this.scene.add(this.directionalLight);
        const helper = new DirectionalLightHelper(this.directionalLight, 5);
        this.scene.add(helper);

        this.camera = new PerspectiveCamera(30, this.containerWidth / this.containerHeight, 0.01, 100000.00)// 相机
        this.camera.position.set(8776, 5000, -126)
        const rendererPar = {// 渲染器参数设置
            precision: 'highp',
            antialias: !0,
            logarithmicDepthBuffer: !0,
            depth: !0,
            preserveDrawingBuffer: !!0,
            alpha: !0,
        }

        this.renderer = new WebGLRenderer(rendererPar)
        this.renderer.setSize(this.containerWidth, this.containerHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setClearColor(0x1B346C, 1)
        this.renderer.toneMapping = ACESFilmicToneMapping
        // this.renderer.toneMappingExposure = 1
        this.renderer.outputEncoding = sRGBEncoding;
        this.renderer.physicallyCorrectLights = !0;

        const params = {
            exposure: 1.1,
            bloomStrength: 1.5,
            bloomThreshold: 0,
            bloomRadius: 0
        };


        const renderScene = new RenderPass(this.scene, this.camera);

        const bloomPass = new UnrealBloomPass(new Vector2(this.containerWidth, this.containerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;
        this.renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderScene);
        this.composer.addPass(bloomPass);


        const gui = new GUI();

        gui.add(params, 'exposure', 0.1, 2).onChange(value => {

            this.renderer.toneMappingExposure = Math.pow(value, 4.0);

        });

        gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange(function (value) {

            bloomPass.threshold = Number(value);

        });

        gui.add(params, 'bloomStrength', 0.0, 3.0).onChange(function (value) {

            bloomPass.strength = Number(value);

        });

        gui.add(params, 'bloomRadius', 0.0, 1.0).step(0.01).onChange(function (value) {

            bloomPass.radius = Number(value);

        });

        // STATS

        this.stats = new Stats();
        this.container.appendChild(this.stats.dom);

        // this.renderer.toneMapping = THREE.ReinhardToneMapping;

        this.container.appendChild(this.renderer.domElement);

        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(this.containerWidth, this.containerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.container.appendChild(this.labelRenderer.domElement);


        this.controls = new OrbitControls(this.camera, this.labelRenderer.domElement)// 控制器引入
        // this.controls.maxDistance = 2000;
        this.controls.update();
        this.gltfLoader = new GLTFLoader();


        this.models = new Group;
        this.scene.add(this.models);
        // this.container.addEventListener('mousedown', this.mouseDown.bind(this), !!0)
        // this.container.addEventListener('mousemove', this.mouseMove.bind(this), !!0)
        // this.container.addEventListener('mouseup', this.mouseUp.bind(this), !!0)

        this.loadModel();
    }

    onWindowResize() {
        this.containerWidth = this.container.offsetWidth
        this.containerHeight = this.container.offsetHeight;
        this.camera.aspect = this.containerWidth / this.containerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.containerWidth, this.containerHeight)
        this.labelRenderer.setSize(this.containerWidth, this.containerHeight)
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
        this.renderer.dispose();
    }

    loadModel() {
        this.gltfLoader.load(
            // resource URL
            'model/dimian.glb',
            // called when the resource is loaded
            (gltf) => {

                this.scene.add(gltf.scene);
                gltf.scene.traverse(mesh => {
                    if (mesh.isMesh && mesh.name === "海面01") {

                        this.water = new Water(
                            mesh.geometry,
                            {
                                textureWidth: 2048,
                                textureHeight: 2048,
                                waterNormals: new TextureLoader().load('img/waternormals.jpg', function (texture) {

                                    texture.wrapS = texture.wrapT = RepeatWrapping;

                                }),
                                sunDirection: new Vector3(500, 0, 0),
                                sunColor: 0xffffff,
                                waterColor: 0x6495ED,
                                distortionScale: 3.7,
                            }
                        );
                        this.water.position.copy(mesh.position);
                        console.log(this.water);
                        gltf.scene.add(this.water);
                        gltf.scene.remove(mesh);
                    }
                })

                const sky = new Sky();
                sky.scale.setScalar(100000);
                this.scene.add(sky);

                const skyUniforms = sky.material.uniforms;

                skyUniforms['turbidity'].value = 10;
                skyUniforms['rayleigh'].value = 2;
                skyUniforms['mieCoefficient'].value = 0.005;
                skyUniforms['mieDirectionalG'].value = 0.8;

                // const parameters = {
                //     elevation: 2,
                //     azimuth: 180
                // };

                // const pmremGenerator = new PMREMGenerator(this.renderer);
                // const sun = new Vector3();
                // const updateSun = () => {

                //     const phi = MathUtils.degToRad(90 - parameters.elevation);
                //     const theta = MathUtils.degToRad(parameters.azimuth);

                //     sun.setFromSphericalCoords(1, phi, theta);

                //     sky.material.uniforms['sunPosition'].value.copy(sun);
                //     this.water.material.uniforms['sunDirection'].value.copy(sun).normalize();

                //     this.scene.environment = pmremGenerator.fromScene(sky).texture;

                // }

                // updateSun();

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


}