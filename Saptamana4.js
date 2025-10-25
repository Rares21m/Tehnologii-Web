// Problema 1 
//Exemplu 
// class Stream {
//     #value;
//     #nextvalue

//     static #count = 0
//     constructor(value, nextValue) {
//         this.#value = value
//         this.#nextvalue = nextValue
//         Stream.#count++
//     }

//     get value() {
//         return this.#value
//     }

//     get next() {
//         this.#value = this.#nextvalue(this.#value)
//         return this.#value
//     }

//     static get count() {
//         return Stream.#count
//     }
// }

// class ConstantStream extends Stream {
//     constructor(value) {
//         super(value, value => value)
//     }
// }

// class NextIntegerStream extends Stream {
//     constructor() {
//         super(0, value => value + 1)
//     }
// }

// const constant = new ConstantStream(1)
// const nextInteger = new NextIntegerStream()

// for (let i = 0; i < 10; i++) {
//     console.log(`constant[${i}] = ${constant.next}`)
//     console.log(`nextInteger[${i}] = ${nextInteger.next}`)

// }

// console.log(Stream.count)





//Rezolvare 1 

// class SirPar {
//   constructor(start) {
//     this.curent = start % 2 === 0 ? start : start + 1;
//   }

//   next() {

//     const valoare = this.curent;
//     this.curent += 2;
//     return valoare;
//   }
// }

// const sir = new SirPar(13); 
// console.log(sir.next()); 
// console.log(sir.next()); 
// console.log(sir.next()); 



// Exercitiul 2 

class Software {
    constructor(nume) {
        this.nume = nume;
    }

    run() {
        console.log(`${this.nume} este runnable`)
    }
}

const s0 = new Software('Google')
s0.run();
class Browser extends Software {
    constructor(nume) {
        super(nume)
        this.plugins = []
    }

    InstallPluggin(a) {
        this.plugin.concat(a);
    }


    run() {
        super.run(); 
        console.log("Plugin-uri instalate:");
        for (let i = 0; i < this.plugins.length; i++) {
            console.log(`- ${this.plugins[i]}`);
    }
}

}

const p0 = new Browser("Modzila")
p0.InstallPluggin("NoAds");
p0.InstallPluggin("SomePlugin");
p0.run();



// //Exemplu
// class Robot {
//     constructor(name) {
//         this.name = name

//     }

//     move() {
//         console.log(`${this.name} is moving`)
//     }

// }

// const r0 = new Robot('some robot')
// r0.move()

// class Weapon {
//     constructor(description) {
//         this.description = description
//     }

//     fire() {
//         console.log(`${this.description} is firing`)
//     }
// }

// const w0 = new Weapon('laser')
// w0.fire()

// class CombatRobot extends Robot {
//     constructor(name) {
//         super(name)
//         this.weapons = []
//     }

//     addWeapons(w) {
//         this.weapons.push(w)
//     }

//     fire() {
//         console.log('firing all weapons')
//         this.weapons.forEach(element => {
//             element.fire()
//         });
//     }
// }

// const r1 = new CombatRobot('some combat robot')
// r1.addWeapons(w0)
// r1.move()
// r1.fire()

// Robot.prototype.fly = function () {
//     console.log(`${this.name} is flying`)
// }

// r1.fly()