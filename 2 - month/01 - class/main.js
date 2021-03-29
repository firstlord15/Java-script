// class Car { // class считай OOP
//     model = '' // это считай атрибут

//     drive = () => { // типо его действие
//         console.log('car driving') // принцип как у фунции, по факту это и есть фунция.

//     }   

// }
// // class всегда заглавной 
// // class Name {} все)

// const car1 = new Car() 
// car1.model = "audi"
// car1.drive() // использования действия или же функции.

// const car2 = new Car()
// car2.model = "mers"
// car2.drive()

// const car3 = new Car() // new Car() - new озночает создать объект в Car() - class
// car3.model = "Lexus" // car3.model = "Lexus" - задаем model(то есть ту переменную, которая задана в class Car) объекта car3
// car3.drive()

// // ПОСМОТРЕТЬ ТЕМУ CLASS В ЮТУБЕ

// class Animal {
//     name = ''
//     vocie = (vocie) => {
//         console.log(vocie) // vocie от
//     }
// }

// const cat = new Animal()
// cat.name = 'Barsic'
// cat.vocie('may may')

// const dog = new Animal()
// dog.name = 'Adam'
// dog.vocie('gav gav')

// // const func = (args) => {
// //     console.log(args)
// // }

// // func('lalallala')

//

// class Car {
//     model = "";

//     drive = (voice) => { // здесь создаем аргумент(voice) или переменную которое к нему относиться
//         console.log(voice) // здесь тот аргумент(voice), будет выводиться
//     }
// }

// const car1 = new Car();
// car1.model = 'bmv';
// car1.drive("*bmv starting*") // тут, то что мы пишем, относиться к аргументу(voice).

// const car2 = new Car();
// car2.model = 'audi';
// car2.drive("*audi starting*")

// CONSTRUCT!!

class Car {
    model = ""
    series = ""
    
    constructor(model, series) { // ЭТО конструкт(без =>)
        this.model = model;
        this.series = series;
        console.log(model, series)
    }

    drive = () => { 
        console.log(this.series) // он как бы относиться к тому классу, который его вызывает
        console.log(this.model, 'drive') // this.model указывает model того класса, который его вызывает
    }

    getSeries = () => {
        console.log(this.series)
    }
}

const car1 = new Car('bmv', 'bmv что-то там');
// car1.model = 'bmv';
car1.drive() 

const car2 = new Car('audi', 'audi что-то там'); // внутри пишем значения переменной, и она относиться к переменной model, которая в свою очередь, к конструкту
// car2.model = 'audi';
car2.drive()





