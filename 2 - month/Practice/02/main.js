// class User {
//     name = ''
//     surname = ''

//     constructor(name, surname) {
//         this.name = name
//         this.surname = surname
//     }

//     get Fullname () {
//         return this.name +" "+ this.surname
//     }
// }

// class Students extends User {
//     year = 0

//     constructor (name, surname, year) {
//         super(name, surname)
//         this.year = year
//     }

//     get Course () {
//         return 2021 - this.year + " years"
//     }
// }

// const Rodya = new Students("Ratmir", "Ashimov", 2017)
// console.log(Rodya.Fullname)
// console.log(Rodya.Course)


// class Person {
//     name = ''
//     age = 0

//     constructor(name, age) {
//         this.name = name
//         this.age = age  
//     }

//     get student () {
//         if (this.age >= 17) {
//             return "student"
//         } else {
//             return "people"
//         }
//     }
// }

// const person = new Person("Asan",19)
// console.log(person.student)


// My version

// class Star {
//     _star = 0

//     constructor(_star) {
//         this._star = _star
//     }

//     setgetStar = (value) => {
//         if (value > 5){
//            this._star = 5
//            console.log(this._star)
//         } else if (value < 0){
//            this._star = 0
//            console.log(this._star)
//         } else {
//            this._star = value
//            console.log(this._star)
//         }
//     } 
// }

// const v1 = new Star(15)
// v1.setgetStar(124414)

// const v2 = new Star(15)
// v2.setgetStar(3)

// const v3 = new Star(15)
// v3.setgetStar(-1142)


// Teacher's version

// class Star {
//     _star = 0

//     constructor(star) {
//         this.star = star
//     }

//     set star (value) {
//         if (value > 5){
//            this._star = 5
//         } else if (value < 0){
//            this._star = 0
//         } else {
//            this._star = value
//         }
//     } 

//     get star() {
//         return this._star
//     }
// }


// const v1 = new Star(15)
// console.log(v1.star)

// const v2 = new Star(3)
// console.log(v2.star)

// const v3 = new Star(-15)
// console.log(v3.star)