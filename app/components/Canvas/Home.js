import {Plane} from 'ogl'
import map from "lodash/map"

import Media from "./Media"

export default class {
  constructor ({gl}) {
    this.gl = gl
    this.medias = document.querySelectorAll(".home__gallery__media__image")

    this.createGeometry()
    this.createGallery()
  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createGallery() {
    map(this.medias, (element, index) => {
      return new Media({
        element, index
      })
    })
  }
}
