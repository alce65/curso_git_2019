// Accesors

class Pais {
    
    get lang() {
        let languaje = 'Otros'
        if (this.code == 'es') {
            languaje = 'Español'
        }
        return languaje;
    }
    
    set setJefe(name) {
        this._jefe = name.toLowerCase()
    }

    constructor(code) { 
        this.code = code
    }
}

let p1 = new Pais('es')
console.log(p1.lang)
p1.setJefe = 'Pepe'
console.log(p1)