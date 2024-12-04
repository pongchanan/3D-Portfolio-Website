import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-move-avatar',
  imports: [],
  templateUrl: './move-avatar.component.html',
  styleUrl: './move-avatar.component.css',
})
export class MoveAvatarComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private triangle!: THREE.Mesh;

  private mouseX: number = 0;
  private mouseY: number = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initThreeJS();
    this.animate();
  }

  private initThreeJS(): void {
    const canvas = this.canvasRef.nativeElement;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0,
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.triangle = new THREE.Mesh(geometry, material);
    this.scene.add(this.triangle);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    // this.triangle.rotation.x += 0.01;
    // this.triangle.rotation.y += 0.01;

    this.triangle.position.x = (this.mouseX / window.innerWidth) * 2 - 1;
    this.triangle.position.y = -(this.mouseY / window.innerHeight) * 2 + 1;

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
