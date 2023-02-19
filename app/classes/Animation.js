import Component from "classes/Component";

export default class Animation extends Component {
  constructor({ element, elements }) {
    super({
      element,
      elements,
    });
    this.element = element;

    this.createObserver();
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("animateIn");
        } else {
          console.log("animateOut");
        }
      });
    });

    this.observer.observe(this.element);
  }
}
