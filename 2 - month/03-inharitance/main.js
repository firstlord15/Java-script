// class Transport {
//     model = ''
//     fuel = ''

//     constructor (fuel, model) {
//         this.fuel = fuel
//         this.model = model
//     }

//     drive = () => {
//         console.log("drive")
//     }
// }

// const transport = new Transport('benzin', 'asd')
// console.log(transport.model)
// console.log(transport.fuel)
// transport.drive()

// class Car extends Transport { // так мы наследствуем, то есть 

// }

// const car = new Car("Poco X3", "Xiaomi")
// console.log(car.model)
// console.log(car.fuel)
// car.drive()

// class Parents {
//     name = ''
//     surname = ''
//     money = 0

//     constructor (name, surname, money) {
//         this.name = name
//         this.surname = surname
//         this.money = money
//     }

//     get fullname () {
//         return this.name+" "+this.surname
//     }

//     freetime () { // без = она будет как let(изменяется), а с = как const(неизменяемой)
//         console.log('relaxe')
//     }
// }

// const Pe = new Parents('Тимур', 'Ашимов', 1300000)
// console.log(Pe.fullname)
// console.log("money: ",Pe.money)
// // Pe.freetime()

// class Children extends Parents {

//     // constructor (name, surname, money) {
//     //     super(name, surname, money) // super - это конструтор внутри конструктора, туда засовываеться все атрибуты(переменные) от рордителя
//     // }

//     freetime () {
//         if (this.money > 100 ){
//             console.log("play games")
//         } else {
//             super.freetime() // super - типо все перееменные от родителя(class parents)
//         }
//     }
// }

// const child2 = new Children("Ratmir", "Ashimov", 10000)
// console.log(child2.fullname)
// console.log("money: ",child2.money)
// child2.freetime()


// const child = new children('Ратмир', 'Ашимов')
// console.log(child.name)
// console.log(child.surname)
// console.log(child.fullname)


class Parents {
    
    money = 0

    constructor (money) {
        this.money = money
    }

    getMoney () {
        return this.money
    }
}

const Pe = new Parents(1000)
console.log(Pe.getMoney())

class Children extends Parents {
    getMoney () {
        return super.getMoney() * 2
    }
}

const child = new Children(600)
console.log(child.getMoney())

