class Ninja {
    constructor (nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log(`El nombre del ninja es ${this.nombre}`);
    }
    
    showStats () {
        console.log(`
        Nombre: ${this.nombre}
        Fuerza: ${this.fuerza}
        Velocidad: ${this.velocidad}
        Salud: ${this.salud}
        `);
    }

    drinkSake () {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(nombre, sabiduria = 10) {
        super(nombre, 200, 10, 10)
        this.sabiduria = sabiduria
    }

    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
}

let superSensei = new Sensei ("Master Splinter");

superSensei.speakWisdom();
superSensei.drinkSake();
superSensei.showStats();