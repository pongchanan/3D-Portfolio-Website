import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-move-avatar',
  templateUrl: './move-avatar.component.html',
  styleUrl: './move-avatar.component.css',
})
export class MoveAvatarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private triangle!: THREE.Mesh;
  private leftEye!: THREE.Mesh;
  private rightEye!: THREE.Mesh;
  private mouth!: THREE.Mesh;

  private mouseX: number = 0;
  private mouseY: number = 0;

  private blinkInterval!: number;
  private smileInterval!: number;
  private lastMouseMoveTime!: number;
  private shakeInterval!: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initThreeJS();
    this.animate();
    this.startBlinking();
    this.startSmiling();
    this.startShaking();
  }

  private initThreeJS(): void {
    const canvas = this.canvasRef.nativeElement;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff); // Set background color to white

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.camera.position.x = -5;

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0,
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.triangle = new THREE.Mesh(geometry, material);
    this.scene.add(this.triangle);

    // Create eyes
    const eyeGeometry = new THREE.CircleGeometry(0.1, 32);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    this.leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    this.leftEye.position.set(-0.5, 0.5, 0.1);
    this.scene.add(this.leftEye);

    this.rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    this.rightEye.position.set(0.5, 0.5, 0.1);
    this.scene.add(this.rightEye);

    // Create mouth
    const mouthGeometry = new THREE.BufferGeometry();
    const mouthVertices = new Float32Array([
      -0.5, -0.5, 0.1, 0.5, -0.5, 0.1, 0.0, -0.2, 0.1,
    ]);
    mouthGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(mouthVertices, 3)
    );
    const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    this.scene.add(this.mouth);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    // this.triangle.rotation.x += 0.01;
    // this.triangle.rotation.y += 0.01;

    this.triangle.position.x = (this.mouseX / window.innerWidth) * 2 - 1;
    this.triangle.position.y = -(this.mouseY / window.innerHeight) * 2 + 1;

    // Update eyes and mouth positions
    this.leftEye.position.x = this.triangle.position.x - 0.5;
    this.leftEye.position.y = this.triangle.position.y + 0.5;
    this.rightEye.position.x = this.triangle.position.x + 0.5;
    this.rightEye.position.y = this.triangle.position.y + 0.5;
    this.mouth.position.x = this.triangle.position.x;
    this.mouth.position.y = this.triangle.position.y - 0.5;

    this.renderer.render(this.scene, this.camera);
  }

  private startBlinking(): void {
    this.blinkInterval = window.setInterval(() => {
      this.leftEye.scale.y = 0.1;
      this.rightEye.scale.y = 0.1;
      setTimeout(() => {
        this.leftEye.scale.y = 1;
        this.rightEye.scale.y = 1;
      }, 200);
    }, 3000);
  }

  private startSmiling(): void {
    this.smileInterval = window.setInterval(() => {
      const mouthVertices = new Float32Array([
        -0.5, -0.5, 0.1, 0.5, -0.5, 0.1, 0.0, -0.3, 0.1,
      ]);
      this.mouth.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(mouthVertices, 3)
      );
      setTimeout(() => {
        const mouthVertices = new Float32Array([
          -0.5, -0.5, 0.1, 0.5, -0.5, 0.1, 0.0, -0.2, 0.1,
        ]);
        this.mouth.geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(mouthVertices, 3)
        );
      }, 500);
    }, 5000);
  }

  private startShaking(): void {
    this.shakeInterval = window.setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - this.lastMouseMoveTime > 2000) {
        this.triangle.rotation.z = Math.sin(currentTime / 100) * 0.05;
        this.triangle.position.x = 0;
        this.triangle.position.y = 0;
      } else {
        this.triangle.rotation.z = 0;
      }
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.blinkInterval);
    clearInterval(this.smileInterval);
    clearInterval(this.shakeInterval);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.lastMouseMoveTime = Date.now();
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection
  }
}
