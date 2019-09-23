class MiComponente extends HTMLElement {
    constructor() {
        super()
        let element = 
        document.querySelector('[rel="import"]').import
        .querySelector('template')


        const shadow = this.attachShadow({mode:'open'})


        shadow.innerHTML = element.innerHTML
    }
}

customElements.define('mi-componente', MiComponente)