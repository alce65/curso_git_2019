export class App {
    constructor() {
        this.isConeccted = false
        this.btnConnect = document.querySelector('button')
        this.aBotonesComprar = 
            document.querySelectorAll('boton-comprar')

        this.btnConnect.addEventListener('click', 
            this.onClickConnect.bind(this))
        this.aBotonesComprar.forEach(
            item => item.addEventListener('setOperacion',
                this.onOperacion.bind(this))
        )
    }

    onClickConnect() {
        this.isConeccted = !this.isConeccted
        if (this.isConeccted ) {
            this.aBotonesComprar.forEach(
                item => item.setAttribute('state', 'connected')
            )
            this.btnConnect.innerHTML = 'Desconectar'
        } else {
            this.aBotonesComprar.forEach(
                item => item.removeAttribute('state')
            )
            this.btnConnect.innerHTML = 'Conectar'
        }
        console.log(this.isConeccted)
    }

    onOperacion(ev) {
        console.log('Enviando datos', ev.detail)
    }
}