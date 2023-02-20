import GSAP from "gsap";

import Animation from "classes/Animation";

import {calculate, split} from 'utils/text'

export default class Title extends Animation {
  constructor({ element, elements }) {
    console.log(element)
    super({
      element,
      elements,
    });

    split({ element: this.element})
    split({ element: this.element})

    this.elementLines = this.element.querySelector('span span')
  }

  animateIn() {
    GSAP.fromTo(
      this.element,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1.5,
      }
    );
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });
  }

  onResize() {}
}
