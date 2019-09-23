

export class MiComponente extends HTMLElement {
    constructor() {
        super()
        const template = `
            <style>
                :host {
                    display: block;
                    width: 80%;
                    margin: 0.5rem auto;
                    padding: 0.2rem 0.8rem;
                    background-color: bisque;
                }
                h1 {
                    background-color: brown;
                    color: bisque;
                    padding: 0.2rem;
                }
            </style>
            <div>
                <h1>Ejemplo de Componente</h1>
                <p>Esto es un componente</p>
            </div>
        `
        const shadow = this.attachShadow({mode:'open'})
        shadow.innerHTML = template
    }
}

customElements.define('mi-componente', MiComponente)