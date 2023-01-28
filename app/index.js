import About from 'pages/about'
import Collections from 'pages/Collections'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
class App {
  constructor () {
    this.createPages()
    this.createContent()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')

    console.log(this.template)
  }

  createPages () {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home(),
    }

    this.page = this.pages[this.template]

    console.log(this.pages)
  }
}

new App()
