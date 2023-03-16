import { Mesh, Program, Texture } from "ogl"

import fragment from "shaders/plane-fragment.glsl"
import vertex from "shaders/plane-vertex.glsl"

export default class {
  constructor ({ element, gl }) {
    this.element = element
    this.gl = gl
  }

  createTexture () {
    this.texture = new Texture(this.gl)

  }

  createProgram() {
    this.program = new Program({
      fragment, vertex, uniforms: {
        uniforms: {

        }
      }
    })

  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })

  }
}
