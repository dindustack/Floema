import each from "lodash/each";

import Preloader from "components/Preloader";

import About from "pages/about";
import Collections from "pages/Collections";
import Detail from "pages/Detail";
import Home from "pages/Home";

class App {
  constructor() {
    this.createPreloader();
    this.createContent();
    this.createPages();

    this.addLinkListeners();
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded)
  }

  createContent() {
    this.content = document.querySelector(".content");
    this.template = this.content.getAttribute("data-template");
  }

  createPages() {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home(),
    };

    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
  }

  onPreloaded() {
    console.log("Preloaded!")
  }

  async onChange(url) {
    await this.page.hide();
    const request = await window.fetch(url);

    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement("div");

      div.innerHTML = html;

      const divContent = div.querySelector(".content");
      this.template = divContent.getAttribute("data-template");

      this.content.setAttribute(
        "data-template",
        divContent.getAttribute("data-template")
      );
      this.content.innerHTML = divContent.innerHTML;

      this.page = this.pages[this.template];
      this.page.create();
      this.page.show();
    } else {
      console.log("Error");
    }
  }

  addLinkListeners() {
    const links = document.querySelectorAll("a");

    each(links, (link) => {
      link.onclick = (event) => {
        event.preventDefault();
        const { href } = link;

        this.onChange(href);
      };
    });
  }
}

new App();
