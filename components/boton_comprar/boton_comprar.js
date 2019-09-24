export class BotonComprar extends HTMLElement {

    get template() {
        return `
        <style>
            :host {
                display: block;
                margin: 1rem;
                --color-boton: orange;
                --aire-boton: 1rem;
            }
            button {
                background-color: var(--color-boton);
                border: 0;
                border-radius: 5px;
                color: white;
                padding: var(--aire-boton);
                text-transform: uppercase;
              }
        </style>
        <div>
            <button>Comprar Ahora</button>
        </div>
        <p>Gracias por cofiar en nosotros</p>
        `
    }

    constructor() {
        super()
        console.log('Instanciado el boton')
    }

    connectedCallback() {
        console.log('Renderizado el boton') 

        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = this.template

        this.btnComprar = this.shadow.querySelector('button')
        this.btnComprar.addEventListener('click', 
            this.onClick.bind(this))
    };

    onClick() {
        console.log('Enviando datos')
    }
}

customElements.define('boton-comprar', BotonComprar)