import { Plane, Transform } from "ogl";
import map from "lodash/map";

import Media from "./Media";

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.sizes = sizes;
    this.scene = scene;

    this.group = new Transform();

    this.mediasElements = document.querySelectorAll(
      ".home__gallery__media__image"
    );

    this.createGeometry();
    this.createGallery();

    this.group.setParent(this.scene);
  }

  createGeometry() {
    this.geometry = new Plane(this.gl);
  }

  createGallery() {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes,
      });
    });
  }

  onResize(event) {
    map(this.medias, (media) => media.onResize(event));
  }
}
