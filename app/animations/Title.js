import GSAP from "gsap";

import Animation from "classes/Animation";

import { calculate, split } from "utils/text";

export default class Title extends Animation {
  constructor({ element, elements }) {
    console.log(element);
    super({
      element,
      elements,
    });

    split({ element: this.element, append: true });
    split({ element: this.element, append: true });

    this.elementLinesSpans = this.element.querySelectorAll("span span");
  }

  animateIn() {
    GSAP.fromTo(
      this.elementLines,
      {
        autoAlpha: 1,
        y: "100%",
      },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1.5,
        stagger: 0.2,
        y: "100%",
      }
    );
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });
  }

  onResize() {
    this.elementLines = calculate(this.elementLinesSpans);

    console.log("praise", this.elementLines)
  }
}
