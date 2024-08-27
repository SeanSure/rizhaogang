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


export default class Veiwer {
    constructor(container, event) {
        this.container = document.querySelector(container);
        this.event = event;
        this.containerWidth = this.container.offsetWidth
        this.containerHeight = this.container.offsetHeight
        this.init();
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera)
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


        this.loadModel()
    }

    loadModel() {

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

        const geometry = new PlaneGeometry(10, 10);
        const material = new ShaderMaterial({
            color: 0xffff00,
            side: DoubleSide,
            vertexShader: vs,
            fragmentShader: fs,
        });
        const plane = new Mesh(geometry, material);
        this.scene.add(plane);
    }
}