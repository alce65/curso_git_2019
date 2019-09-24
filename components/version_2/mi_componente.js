export class MiComponente extends HTMLElement {
    get template() {
        return `
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
                p {
                    font-size: 1.4rem;
                }
            </style>
            <div>
                <h1>Ejemplo de Componente</h1>
                <p>Esto es un componente</p>
            </div>
        `
    }
    constructor() {
        super()
        const shadow = this.attachShadow({mode:'open'})
        shadow.innerHTML = this.template
        console.log('se ha ejecutado el constructor');
    }
    
    // Defino una función callback para el instante del ciclo de vida "attached"
    // Llamado cuando el elemento se es insertado en el documento, incluyéndose en un árbol shadow
    connectedCallback() {
        console.log('se ha conectado un elemento al DOM');
    };
    
    // Defino una función callback para el instante del ciclo de vida "detached
    disconnectedCallback () {
        console.log('se ha retirado un elemento del DOM');
    };
    
    // Defino una función callback para el instante del ciclo de vida "attributeCanged"
    attributeChangedCallback = function(attr, oldVal, newVal) {
        console.log('Cambiado ', attr, ' al valor: ', newVal);
      };
}

customElements.define('mi-componente', MiComponente)