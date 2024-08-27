import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {
    Scene, AmbientLight, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding,
    Group, DirectionalLight, Vector2, MeshStandardMaterial, Color, Box3, MathUtils, PMREMGenerator,
    Raycaster, TextureLoader, RepeatWrapping, Vector3, DirectionalLightHelper, Layers,
    MeshBasicMaterial, ShaderMaterial, Box3Helper, PlaneGeometry, BufferGeometry, LineDashedMaterial,
    Points, PointsMaterial, Float32BufferAttribute, SpriteMaterial, Sprite, CircleGeometry, Mesh, DoubleSide, AdditiveBlending,
    SphereBufferGeometry, Line, ReinhardToneMapping, HemisphereLight, PointLight, UniformsUtils, ShaderLib, MultiplyOperation,
    BufferAttribute, ShaderChunk,
} from 'three';
// import { CSS2DRenderer, CSS2DObject } from './CSS2DRenderer.js';
import { CSS2DRenderer } from './CSS2DRenderer.js';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
const TWEEN = require('@tweenjs/tween.js')
import { Water } from './Water.js';
// import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { Sky } from './Sky.js';
import PolyLine from './polyLine.js'  // 绘制多边形
import roadData from './road.json'

const ENTIRE_SCENE = 0, BLOOM_SCENE = 1;

const bloomLayer = new Layers();
bloomLayer.set(BLOOM_SCENE);

const params = {
    exposure: 0.8,
    bloomStrength: 1.0,
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

        const positions = [
            new Vector3(-23, -8, 12),
            new Vector3(26, -8, 11),
            new Vector3(18, -8, -39),
            new Vector3(-7, -8, -52),
        ]

        const streamlines = [];
        positions.forEach(position => {
            const glowline = this.glowLines(position);
            const random = Math.random();
            glowline.random = random;
            streamlines.push(glowline);
            this.scene.add(glowline);
        })


        let circle = this.scatterCircle(16, 0.1, 0.5, new Vector3(0, 1, 1), 0.02);
        circle.position.set(13, -2, 20);
        circle.rotateX(-Math.PI / 2)
        circle.layers.enable(BLOOM_SCENE);
        this.scene.add(circle);

        let circle1 = this.scatterCircle(10, 0.1, 0.5, new Vector3(0, 1, 1), 0.02);
        circle1.position.set(23, -2, -32);
        circle1.rotateX(-Math.PI / 2)
        circle1.layers.enable(BLOOM_SCENE);
        this.scene.add(circle1);

        this.addFlowLine();



        const animate = () => {

            requestAnimationFrame(animate);
            this.stats.update();

            TWEEN.update()
            // this.renderer.render(this.scene, this.camera);
            this.labelRenderer.render(this.scene, this.camera);
            this.renderBloom();
            this.finalComposer.render();
            // render the entire scene, then render bloom scene on top

            if (this.water) this.water.material.uniforms['time'].value += 1.0 / 60.0;
            if (streamlines.length > 0) {

                for (let i = 0; i < streamlines.length; i++) {
                    const line = streamlines[i];
                    if (line.position.y > 40) line.position.y = -5;
                    line.position.y += 0.02 * line.random;

                }
            }
        }
        animate();
    }
    init() {
        this.scene = new Scene()
        this.ambientlLight = new AmbientLight(0x222222, 0.6)
        this.scene.add(this.ambientlLight)// 添加环境光

        // const light = new PointLight(0xff0000, 1, 1000);
        // light.position.set(0, 5, 0);
        // this.scene.add(light);
        // // const hemisphereLight = new HemisphereLight(0xffffff, 0x000000, 1.0)// 添加半球光
        // // this.scene.add(hemisphereLight)
        // var pointLight = new PointLight(0xffffff, 10.0, 10000);
        // // pointLight.position.set(50, 50, 50);
        // this.scene.add(pointLight);

        this.directionalLight = new DirectionalLight(0xC2F6F4, 1);
        // this.directionalLight = new DirectionalLight(0xffffff, 10.0);
        this.directionalLight.position.set(0, 300, 1300)
        this.scene.add(this.directionalLight);


        // const helper = new DirectionalLightHelper(this.directionalLight, 5)
        // this.scene.add(helper)
        // this.directionalLight1 = new DirectionalLight(0xC2F6F4, 1);
        // // this.directionalLight = new DirectionalLight(0xffffff, 10.0);
        // this.directionalLight1.position.set(0, 300, -1300)
        // this.scene.add(this.directionalLight1);
        // const helper1 = new DirectionalLightHelper(this.directionalLight1, 5)
        // this.scene.add(helper1)


        this.camera = new PerspectiveCamera(30, this.containerWidth / this.containerHeight, 1, 10000.00)// 相机
        this.camera.position.set(117, 82, 0)
        const rendererPar = {// 渲染器参数设置
            precision: 'highp',
            antialias: !0,
            // logarithmicDepthBuffer: !0,
            depth: !0,
            preserveDrawingBuffer: !!0,
            alpha: !0,
        }

        this.renderer = new WebGLRenderer(rendererPar)
        this.renderer.setSize(this.containerWidth, this.containerHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setClearColor(0x000000, 1)
        this.renderer.toneMapping = ACESFilmicToneMapping
        // this.renderer.toneMappingExposure = 1
        this.renderer.toneMappingExposure = Math.pow(params.exposure, 4.0);
        this.renderer.outputEncoding = sRGBEncoding;
        this.renderer.physicallyCorrectLights = !0;
        // this.renderer = new WebGLRenderer({ antialias: true });
        // this.renderer.setPixelRatio(window.devicePixelRatio);
        // this.renderer.setSize(this.containerWidth, this.containerHeight);
        // this.renderer.toneMapping = ReinhardToneMapping;


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
        this.controls.maxPolarAngle = Math.PI * 0.4;
        this.controls.minDistance = 5.0;
        // this.controls.maxDistance = 170;
        this.controls.target.set(5, -6, -4);
        // this.controls.maxDistance = 100.0;
        // this.controls.maxDistance = 2000;
        this.controls.update();
        this.gltfLoader = new GLTFLoader();

        function disposeMaterial(obj) {

            if (obj.material) {

                obj.material.dispose();

            }

        }

        // this.scene.traverse(disposeMaterial);
        // this.scene.children.length = 0;

        this.models = new Group;
        this.scene.add(this.models);

        this.raycaster = new Raycaster();
        this.mouse = new Vector2();

        // this.container.addEventListener('mousedown', this.mouseDown.bind(this), !!0)
        // this.container.addEventListener('mousemove', this.mouseMove.bind(this), !!0)
        this.container.addEventListener('mouseup', this.mouseUp.bind(this), !!0)

        this.loadModel();
    }

    mouseUp(e) {

        if (e.which !== 1) return;
        this.mouse.x = (e.clientX / this.containerWidth) * 2 - 1;
        this.mouse.y = - (e.clientY / this.containerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // calculate objects intersecting the picking ray
        const intersects = this.raycaster.intersectObjects(this.models.children);
        if (intersects.length < 1) return;
        const point = {};
        point.x = Number(intersects[0].point.x.toFixed(3))
        point.y = Number(intersects[0].point.y.toFixed(3))
        point.z = Number(intersects[0].point.z.toFixed(3))
        // console.log(point);

    }

    onWindowResize() {
        this.containerWidth = this.container.offsetWidth
        this.containerHeight = this.container.offsetHeight;
        this.camera.aspect = this.containerWidth / this.containerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.containerWidth, this.containerHeight)
        this.bloomComposer.setSize(this.containerWidth, this.containerHeight)
        this.finalComposer.setSize(this.containerWidth, this.containerHeight)
        this.labelRenderer.setSize(this.containerWidth, this.containerHeight)

        const pixelRatio = this.renderer.getPixelRatio();

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
        this.renderer.dispose();
    }

    loadModel() {
        this.gltfLoader.load(
            // resource URL
            // 'model/dimian.glb',
            'model/shijiugang.glb',
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
                                    sunDirection: this.directionalLight.position.clone().normalize(),
                                    // sunDirection: new Vector3(),
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




                            // const vs = `
                            //         varying vec2 vUv;
                            //               void main() {

                            //                   vUv = uv;

                            //                   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

                            //               }
                            //       `

                            // const fs = `

                            //           uniform float iTime;
                            //             varying vec2 vUv;
                            //             uniform vec2 iResolution;
                            //             uniform vec2 iMouse;

                            //           #define Resolution (iResolution.xy)
                            //           #define DRAG_MULT 0.048
                            //           #define ITERATIONS_RAYMARCH 13
                            //           #define ITERATIONS_NORMAL 48
                            //           #define WATER_DEPTH 1.1
                            //           #define Mouse (iMouse.xy / iResolution.xy)

                            //               vec2 wavedx(vec2 position, vec2 direction, float speed, float frequency, float timeshift) {
                            //                   float x = dot(direction, position) * frequency + timeshift * speed;
                            //                   float wave = exp(sin(x) - 1.0);
                            //                   float dx = wave * cos(x);
                            //                   return vec2(wave, -dx);
                            //               }


                            //               float getwaves(vec2 position, int iterations){
                            //                   float iter = 0.0;
                            //                   float phase = 6.0;
                            //                   float speed = 2.0;
                            //                   float weight = 1.0;
                            //                   float w = 0.0;
                            //                   float ws = 0.0;
                            //                   for(int i=0;i<iterations;i++){
                            //                       vec2 p = vec2(sin(iter), cos(iter));
                            //                       vec2 res = wavedx(position, p, speed, phase, iTime);
                            //                       position += normalize(p) * res.y * weight * DRAG_MULT;
                            //                       w += res.x * weight;
                            //                       iter += 12.0;
                            //                       ws += weight;
                            //                       weight = mix(weight, 0.0, 0.2);
                            //                       phase *= 1.18;
                            //                       speed *= 1.07;
                            //                   }
                            //                   return w / ws;
                            //               }



                            //               float intersectPlane(vec3 origin, vec3 direction, vec3 point, vec3 normal)
                            //                   { 
                            //                       return clamp(dot(point - origin, normal) / dot(direction, normal), -1.0, 9991999.0); 
                            //                   }

                            //   float raymarchwater(vec3 camera, vec3 start, vec3 end, float depth){
                            //       vec3 pos = start;
                            //       float h = 0.0;
                            //       float hupper = depth;
                            //       float hlower = 0.0;
                            //       vec2 zer = vec2(0.0);
                            //       vec3 dir = normalize(end - start);
                            //       for(int i=0;i<318;i++){
                            //           h = getwaves(pos.xz * 0.1, ITERATIONS_RAYMARCH) * depth - depth;
                            //           if(h + 0.01 > pos.y) {
                            //               return distance(pos, camera);
                            //           }
                            //           pos += dir * (pos.y - h);
                            //       }
                            //       return -1.0;
                            //   }
                            //   float H = 0.0;
                            //   vec3 normal(vec2 pos, float e, float depth){
                            //       vec2 ex = vec2(e, 0);
                            //       H = getwaves(pos.xy * 0.1, ITERATIONS_NORMAL) * depth;
                            //       vec3 a = vec3(pos.x, H, pos.y);
                            //       return normalize(cross(normalize(a-vec3(pos.x - e, getwaves(pos.xy * 0.1 - ex.xy * 0.1, ITERATIONS_NORMAL) * depth, pos.y)), 
                            //                              normalize(a-vec3(pos.x, getwaves(pos.xy * 0.1 + ex.yx * 0.1, ITERATIONS_NORMAL) * depth, pos.y + e))));
                            //   }
                            //   mat3 rotmat(vec3 axis, float angle)
                            //   {
                            //       axis = normalize(axis);
                            //       float s = sin(angle);
                            //       float c = cos(angle);
                            //       float oc = 1.0 - c;
                            //       return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s, 
                            //       oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s, 
                            //       oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c);
                            //   }

                            //   vec3 getatm(vec3 ray, float roughness){
                            //       vec3 sharp = mix(vec3( 0.0293, 0.0698, 0.1717) * 10.0, vec3(3.0), pow(1.0 - ray.y, 8.0));
                            //       vec3 rough = vec3(vec3( 0.0293, 0.0698, 0.1717) + vec3(1.0));
                            //       return mix(sharp, rough, roughness);
                            //   }
                            //               vec3 getRay(vec2 uv){
                            //                 //   uv = (uv * 2.0 - 1.0) * vec2(Resolution.x / Resolution.y, 1.0);
                            //                   uv = (uv * 4.0 - 1.0) * vec2(Resolution.x / Resolution.y, 1.0);
                            //                   vec3 proj = normalize(vec3(uv.x, uv.y, 1.0) + vec3(uv.x, uv.y, -1.0) * pow(length(uv), 2.0) * 0.05);	
                            //                   if(Resolution.x < 400.0) return proj;
                            //                   vec3 ray = rotmat(vec3(0.0, -1.0, 0.0), 3.0 * (Mouse.x * 2.0 - 1.0)) * rotmat(vec3(1.0, 0.0, 0.0), 1.5 * (Mouse.y * 2.0 - 1.0)) * proj;
                            //                   return ray;
                            //               }

                            //               vec3 getColor(vec2 uv){
                            //                   vec3 ray = getRay(uv);

                            //                   // if(ray.y >= -0.01){
                            //                   //     vec3 C = getatm(ray, 0.0) * 1.0 + sun(ray) * 2.0;
                            //                   //      return C; 
                            //                   // }

                            //                   vec3 wfloor = vec3(0.0, -WATER_DEPTH, 0.0);
                            //                   vec3 wceil = vec3(0.0, 0.0, 0.0);
                            //                   vec3 orig = vec3(0.0, 2.0, 0.0);
                            //                   float hihit = intersectPlane(orig, ray, wceil, vec3(0.0, 1.0, 0.0));
                            //                   float lohit = intersectPlane(orig, ray, wfloor, vec3(0.0, 1.0, 0.0));
                            //                   vec3 hipos = orig + ray * hihit;
                            //                   vec3 lopos = orig + ray * lohit;
                            //                   float dist = raymarchwater(orig, hipos, lopos, WATER_DEPTH);
                            //                   vec3 pos = orig + ray * dist;

                            //                   vec3 N = normal(pos.xz, 0.01, WATER_DEPTH);
                            //                   vec2 velocity = N.xz * (1.0 - N.y);
                            //                   vec3 R = reflect(ray, N);
                            //                   float roughness = 1.0 - 1.0 / (dist * 0.01 + 1.0);
                            //                   N = normalize(mix(N, vec3(0.0, 1.0, 0.0), roughness));
                            //                   R = normalize(mix(R, N, roughness));
                            //                   R.y = abs(R.y);
                            //                   float fresnel = (0.04 + (1.0-0.04)*(pow(1.0 - max(0.0, dot(-N, ray)), 5.0)));

                            //                   // vec3 C = fresnel * (getatm(R, roughness) + sun(R)) * 2.0;
                            //                   vec3 C = fresnel * (getatm(R, roughness)) * 2.0;

                            //                   return C;
                            //               }
                            //               vec3 gammacorrect(vec3 c){
                            //                   return pow(c, vec3(1.0 / 2.4));
                            //               }
                            //               vec3 render(vec2 uv){
                            //                   vec3 ray = getRay(uv);
                            //                  vec3 C = getColor(uv) * 0.3;
                            //                  return gammacorrect(C);  
                            //              }



                            //               void main() {

                            //                   gl_FragColor = vec4(render(vUv),1.0);

                            //               }

                            //           `
                            // //     const fs = `


                            // // `

                            // const uniforms = {
                            //     iResolution: { value: new Vector2(this.containerWidth, this.containerHeight) },
                            //     iTime: { value: 0.0 },
                            //     iMouse: { value: new Vector2(-0.1, -0.1) },
                            // }
                            // const material = new ShaderMaterial({
                            //     color: 0xffff00,
                            //     side: DoubleSide,
                            //     vertexShader: vs,
                            //     fragmentShader: fs,
                            //     uniforms: uniforms
                            // });
                            // const render = () => {
                            //     requestAnimationFrame(render);
                            //     uniforms['iTime'].value += 0.6 / 60.0;
                            // }
                            // render();
                            // const water = new Mesh(new PlaneGeometry(700, 700), material);
                            // water.position.y = -3;
                            // // const water = new Mesh(mesh.geometry, material);
                            // // water.position.copy(mesh.position);
                            // water.rotation.x = -Math.PI / 2;
                            // this.scene.add(water);

                            // const onPointerMove = (e) => {
                            //     uniforms['iMouse'].value.x = (e.layerX / this.containerWidth) * 2 - 1;
                            //     uniforms['iMouse'].value.y = - (e.layerY / this.containerHeight) * 2 + 1;
                            // }

                            // this.container.addEventListener('pointermove', onPointerMove);

                            setTimeout(() => {
                                mesh.geometry.dispose();
                                mesh.parent.remove(mesh);
                            }, 0)


                        } else if (mesh.name === "配楼01") {
                            const vertexShader = `
                            varying float vUv;
                            varying float vRoughness;
                            varying vec3 vColor;
                            uniform vec3 emissive;
                            uniform float roughness;
                            void main() {
                                vUv = uv.y;
                                vColor = emissive;
                                vRoughness = roughness;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                
                            }
                        `

                            const fragmentShader = `
                            varying float vUv;
                
                            varying vec3 vColor;
                            varying float vRoughness;
                            void main() {
                
                                float roughness = vRoughness;
                                vec3 color = vColor;

                                for(float i=0.1;i<=1.0;i+=0.1){

                                    if(abs(vUv - i)<0.02){
                                      
                                        roughness =0.7* (1.0 - (abs(vUv - i)/ 0.02));
                                        color += vec3(roughness,roughness,roughness);
                                        roughness = clamp(roughness,vRoughness,0.4);
                                        // color = vec3(roughness,roughness,0.7);
                                      
                                    }
                                  
                                }
                                gl_FragColor = vec4(color*roughness,0.7);
                            }

                            `

                            mesh.geometry.computeVertexNormals()
                            const uniforms = {
                                roughness: { value: 0.2 },
                                emissive: { value: mesh.material.emissive }
                            }


                            // console.log(1111, ShaderChunk.meshphysical_vert);
                            const shaderMaterial = new ShaderMaterial({

                                uniforms: uniforms,
                                vertexShader: vertexShader,
                                fragmentShader: fragmentShader,
                                // vertexShader: ShaderChunk.meshphysical_vert,
                                // fragmentShader: ShaderChunk.meshphysical_frag,
                                // blending: AdditiveBlending,
                                // side: DoubleSide,
                                transparent: true,
                                // polygonOffset: !0,
                                // polygonOffsetFactor: -1,
                                // polygonOffsetUnits: -3,
                                // vertexColors: !0,

                            })

                            // shaderMaterial.uniforms.emissive.value = mesh.material.emissive;
                            // shaderMaterial.uniforms.roughness.value = mesh.material.roughness;
                            // shaderMaterial.uniforms.metalness.value = mesh.material.metalness;
                            mesh.material = shaderMaterial;
                            mesh.material.needsUpdate = !0;
                            mesh.layers.enable(BLOOM_SCENE);

                        }
                        else {
                            mesh.layers.enable(BLOOM_SCENE);
                        }

                    }
                })


                this.models.add(gltf.scene);

                const sky = new Sky();
                sky.scale.setScalar(10000);
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
                // console.log(pmremGenerator.fromScene(sky).texture);
                // console.log(this.water, UniformsUtils.clone(ShaderLib.phong.uniforms));
                // this.water.material.uniforms = UniformsUtils.clone(ShaderLib.phong.uniforms);
                // this.water.material.uniforms.envMap = {};
                // this.water.material.uniforms.diffuse = {};
                // this.water.material.envMap = pmremGenerator.fromScene(sky).texture;
                // this.water.material.combine = MultiplyOperation;
                // this.water.material.uniforms.envMap.value = pmremGenerator.fromScene(sky).texture;
                // this.water.material.uniforms.diffuse.value = new Color('#ff0000');
                // this.water.material.needsUpdate = !0
                // const sun = new Vector3();



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

                // const gui = new GUI();

                // const folderSky = gui.addFolder('Sky');
                // folderSky.add(parameters, 'elevation', 0, 90, 0.1).onChange(updateSun);
                // folderSky.add(parameters, 'azimuth', - 180, 180, 0.1).onChange(updateSun);
                // folderSky.open();

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

    glowLines(position) {
        const lineGroup = new Group();
        const points = [];
        points.push(new Vector3(position.x, -8, position.z));
        points.push(new Vector3(position.x, -2, position.z));
        const geometry = new BufferGeometry().setFromPoints(points);
        const material = new LineDashedMaterial({ color: 0x22CAEB, dashSize: 0.1, gapSize: 0.2 });
        const line = new Line(geometry, material)
        line.computeLineDistances();
        line.layers.enable(BLOOM_SCENE);
        lineGroup.add(line);

        // const map = new TextureLoader().load('img/disc.png');
        // const material1 = new SpriteMaterial({ map: map, color: 0x22CAEB, sizeAttenuation: !!0 });

        // const sprite = new Sprite(material1);
        // sprite.position.copy(points.pop());
        // sprite.scale.set(0.013, 0.013, 1)
        // sprite.layers.enable(BLOOM_SCENE);
        // lineGroup.add(sprite);


        // const geometry1 = new BufferGeometry();
        // geometry1.setAttribute('position', new Float32BufferAttribute(new Vector3(0, 4, 0), 3));

        // const material1 = new PointsMaterial({ color: 0x22CAEB });

        // const points1 = new Points(geometry1, material1);
        // points1.layers.enable(BLOOM_SCENE);
        // lineGroup.add(points1);

        const vertexShader = `
        attribute float size;
        	attribute vec3 customColor;

        	varying vec3 vColor;

        	void main() {

        		vColor = customColor;

        		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

        		gl_PointSize = size * ( 300.0 / -mvPosition.z );

        		gl_Position = projectionMatrix * mvPosition;

        	}
        `
        const fragmentShader = `
        uniform vec3 color;
        	uniform sampler2D pointTexture;
        	uniform float alphaTest;

        	varying vec3 vColor;

        	void main() {

        		gl_FragColor = vec4( color * vColor, 1.0 );

        		gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

        		if ( gl_FragColor.a < alphaTest ) discard;

        	}

        `

        const sizes = [1];
        const colors = [0.13, 0.8, 0.95];
        const positions = [position.x, -2, position.z];
        const geometry1 = new BufferGeometry();
        geometry1.setAttribute('position', new Float32BufferAttribute(positions, 3));
        geometry1.setAttribute('customColor', new Float32BufferAttribute(colors, 3));
        geometry1.setAttribute('size', new Float32BufferAttribute(sizes, 1));

        const material1 = new ShaderMaterial({

            uniforms: {
                color: { value: new Color(0xffffff) },
                pointTexture: { value: new TextureLoader().load('img/disc.png') },
                alphaTest: { value: 1.0 }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });

        //

        const particles = new Points(geometry1, material1);
        particles.layers.enable(BLOOM_SCENE);
        lineGroup.add(particles);
        return lineGroup;
    }

    scatterCircle(r, init, ring, color, speed) {
        var uniform = {
            u_color: { value: color },
            u_r: { value: init },
            u_ring: {
                value: ring,
            },
        };


        var vs = `
            varying vec3 vPosition;
            void main(){
                vPosition=position;
                gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;
        var fs = `
            varying vec3 vPosition;
            uniform vec3 u_color;
            uniform float u_r;
            uniform float u_ring;
    
            void main(){
                float pct=distance(vec2(vPosition.x,vPosition.y),vec2(0.0));
                if(pct>u_r || pct<(u_r-u_ring)){
                    gl_FragColor = vec4(1.0,0.0,0.0,0);
                }else{
                    float dis=(pct-(u_r-u_ring))/(u_r-u_ring);
                    gl_FragColor = vec4(u_color,dis);
                }
            }
        `;
        const geometry = new CircleGeometry(r, 64);
        var material = new ShaderMaterial({
            vertexShader: vs,
            fragmentShader: fs,
            side: DoubleSide,
            uniforms: uniform,
            transparent: true,
            depthWrite: true,
            blending: AdditiveBlending,
            transparent: !0,
        });
        const circle = new Mesh(geometry, material);

        function render() {
            uniform.u_r.value += speed || 0.1;
            if (uniform.u_r.value >= r) {
                uniform.u_r.value = init;
            }
            requestAnimationFrame(render);
        }
        render();

        return circle;
    }

    makeSouth() {
        const geometry = new PlaneGeometry(10, 10);
        const material = new MeshBasicMaterial({ color: 0xffffff, transparent: !0, opacity: .6, map: new TextureLoader().load('img/south.png') });
        const plane = new Mesh(geometry, material);
        plane.position.set(-8, -1.8, 33);
        plane.scale.set(5.7, 6.1);
        plane.rotateX(-Math.PI / 2);
        this.area.add(plane);
    }
    makeWest() {
        const geometry = new PlaneGeometry(5, 10);
        const material = new MeshBasicMaterial({ color: 0xffffff, transparent: !0, opacity: .6, map: new TextureLoader().load('img/west.png') });
        const plane = new Mesh(geometry, material);
        plane.position.set(-6, -1.8, -18);
        plane.scale.set(3.2, 3.6);
        plane.rotateX(-Math.PI / 2);
        this.area.add(plane);
    }
    makeNorth() {
        const geometry = new PlaneGeometry(10, 5);
        const material = new MeshBasicMaterial({ color: 0xffffff, transparent: !0, opacity: .6, map: new TextureLoader().load('img/north.png') });
        const plane = new Mesh(geometry, material);
        plane.position.set(6, -1.8, -42);
        plane.scale.set(2.5, 2.5);
        plane.rotateX(-Math.PI / 2);
        this.area.add(plane);
    }
    makeEast() {
        const geometry = new PlaneGeometry(5, 10);
        const material = new MeshBasicMaterial({ color: 0xffffff, transparent: !0, opacity: .6, map: new TextureLoader().load('img/east.png') });
        const plane = new Mesh(geometry, material);
        plane.position.set(19.5, -1.8, -28);
        plane.scale.set(3.1, 3);
        plane.rotateX(-Math.PI / 2);
        this.area.add(plane);
    }

    showArea() {
        if (this.area) {
            this.disposeGroup(this.area);
            this.area = null;
            return;
        }
        this.area = new Group();
        this.scene.add(this.area);
        this.makeSouth();
        this.makeWest();
        this.makeNorth();
        this.makeEast();
    }

    async addFlowLine(poss) {
        // 添加流线动画

        const vertexShader = `
                uniform float amplitude;
                varying float vUv;
                varying vec3 vColor;
                attribute vec3 color;
                void main() {
                    vUv = uv.y;
                    vColor = color;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    
                }
            `

        const fragmentShader = `
                // uniform vec3 color;
                varying vec3 vColor;
                uniform float opacity;
                uniform float time;
                uniform float random;
                uniform sampler2D flowTexture;
                varying float vUv;
    
                void main() {
    
                    if(vUv > time + (0.12*clamp(random,0.4,1.0))) discard;
                    else if(vUv < time) discard;
                    gl_FragColor = vec4(clamp(random,0.1,0.4),clamp(time,0.5,0.8),clamp((vUv-time)*10.0,0.8,1.0), opacity );
                    // gl_FragColor = texture2D(flowTexture,vUv));
                    // gl_FragColor = vec4(1.0);
                }
            `


        for (let i = 0; i < roadData.length; i++) {
            const point = roadData[i];
            const uniforms = {

                amplitude: { value: 5.0 },
                opacity: { value: 0.6 },
                color: { value: new Color(0xffffff) },
                time: { value: 0.0 },
                random: { value: 0.0 },
                flowTexture: { value: new TextureLoader().load('img/flow.png') }

            }

            const shaderMaterial = new ShaderMaterial({

                uniforms: uniforms,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                blending: AdditiveBlending,
                side: DoubleSide,
                transparent: true,
                polygonOffset: !0,
                polygonOffsetFactor: -1,
                polygonOffsetUnits: -3,
                // vertexColors: !0,

            })



            const points = [];
            point.forEach(v => {
                points.push(new Vector3(v[0], v[1], v[2]));
            })


            const polyLine = new PolyLine(0.05)
            const arrs = polyLine.spliceArr(points)


            const [vertices, normals, indices, uvs, colors] = await polyLine.addArrow(arrs[0], arrs[1])

            const geometry = new BufferGeometry();
            geometry.setAttribute('position', new BufferAttribute(vertices, 3));
            geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
            geometry.setIndex(indices);
            geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2))
            geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3))
            const line = new Mesh(geometry, shaderMaterial)
            // line.position.copy(center);
            // 偏移回去
            // line.position.set(average.x, average.y, average.z)
            line.layers.enable(BLOOM_SCENE)
            line.uniforms = uniforms

            function render() {
                if (uniforms.time.value > 1) uniforms.time.value = 0;
                uniforms.time.value += 0.004;;
                requestAnimationFrame(render);
            }
            render();

            this.scene.add(line)
        }

    }

}