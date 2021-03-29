class Car { // class считай OOP
    model = '' // это считай атрибут

    drive = () => { // типо его действие
        console.log('car driving') // принцип как у фунции, по факту это и есть фунция.

    }   

}
// class всегда заглавной 
// class Name {} все)

const car1 = new Car() 
car1.model = "audi"
car1.drive() // использования действия или же функции.

const car2 = new Car()
car2.model = "mers"
car2.drive()

const car3 = new Car() // new Car() - new озночает создать объект в Car() - class
car3.model = "Lexus" // car3.model = "Lexus" - задаем model(то есть ту переменную, которая задана в class Car) объекта car3
car3.drive()

// ПОСМОТРЕТЬ ТЕМУ CLASS В ЮТУБЕ

class Animal {
    name = ''
    vocie = (vocie) => {
        console.log(vocie) // vocie от
    }
}

const cat = new Animal()
cat.name = 'Barsic'
cat.vocie('may may')

const dog = new Animal()
dog.name = 'Adam'
dog.vocie('gav gav')


