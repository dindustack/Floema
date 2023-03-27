import { Mesh, Program, Texture } from "ogl";

import fragment from "shaders/plane-fragment.glsl";
import vertex from "shaders/plane-vertex.glsl";

export default class {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element;
    this.geometry = geometry;
    this.gl = gl;
    this.index = index;
    this.scene = scene;
    this.sizes = sizes;

    this.createMesh();
    this.createProgram();
    this.createTexture();
  }

  createTexture() {
    this.texture = new Texture(this.gl);

    this.image = new window.Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = this.element.getAttribute("data-src");
    this.image.onload = (_) => (this.texture.image = this.image);
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        tMap: { value: this.texture },
      },
    });
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.setParent(this.scene);

    this.mesh.scale.x = 2;

    this.mesh.position.x += this.index * this.mesh.scale.x;
  }

  createBounds({ sizes }) {
    this.bounds = this.element.getBoundingClientRect();

    this.updateScale(sizes);
    this.updateX();
    this.updateY();

    // console.log("bounds", this.bounds);
  }

  updateScale({ height, width }) {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;

    this.mesh.scale.x = width * this.width;
    this.mesh.scale.y = height * this.height;

    this.mesh.position.x = (-width / 2) + (this.mesh.scale.x / 2);
    this.mesh.position.y = (height / 2) - (this.mesh.scale.x / 2);

    console.log(this.mesh.position.x);
  }

  updateX() {}

  updateY() {}

  onResize(sizes) {
    this.createBounds(sizes);
  }
}
