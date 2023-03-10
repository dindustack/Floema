import { Box, Camera, Mesh, Program, Renderer, Transform } from "ogl";

export default class Canvas {
  constructor() {
    this.createRenderer();
  }

  createRenderer() {
    this.renderer = new Renderer();

    this.gl = this.renderer.gl;
    document.body.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(gl);
    this.camera.position.z = 5;
  }

  createScene() {
    this.scene = new Transform();
  }

  createCube() {
    this.geometry = new Box(this.gl);
    this.program = new Program(gl, {
      vertex: /* glsl */ `
          attribute vec3 position;

          uniform mat4 modelViewMatrix;
          uniform mat4 projectionMatrix;

          void main() {
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `,
      fragment: /* glsl */ `
          void main() {
              gl_FragColor = vec4(1.0);
          }
      `,
    });

    this.mesh = new Mesh(this.geometry, this.program );
    this.mesh.setParent(this.scene);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight,
    });
  }
}
