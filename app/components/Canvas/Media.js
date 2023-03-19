import { Mesh, Program, Texture } from "ogl";

import fragment from "shaders/plane-fragment.glsl";
import vertex from "shaders/plane-vertex.glsl";

export default class {
  constructor({ element, geometry, gl, scene }) {
    this.element = element;
    this.geometry = geometry;
    this.gl = gl;
    this.scene = scene;

    this.createMesh();
    this.createProgram();
    this.createTexture();
  }

  createTexture() {
    this.texture = new Texture(this.gl);

    console.log(this.element)

    this.image = new window.Image();
    this.image.crossOrigin = 'anonymous'
    this.image.src = this.element.getAttibute("data-src");
    this.image.onload = (_) => (this.texture.image = this.image);
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        tMap: { value: this.texture }
      },
    });
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.setParent(this.scene);
  }
}
