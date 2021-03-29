// class Pr {
//     a = 0
//     b = 0

//     constructor(a, b) { // без конструкта 
//         this.a = a
//         this.b = b
//     }

//     P = () => {
//         alert('P равен ' + (this.a+this.b)*2) // <--- и она должна писаться так 
//     }

//     S = () => {
//         alert('S равен ' + this.a*this.b) // alert только с +, без 'запятых'
//     }
// }

// const box = new Pr(3, 12) 
// box.P()
// box.S()

// ДЗ

class Metr {
    m = 0

    constructor(m) {
        this.m = m
    }

    Km = () => {
        console.log('в километрах: ', this.m/1000, 'км')
    }

    Sm = () => {
        console.log('в сантиметрах: ',this.m*100, 'см')
    }

    mm = () => {
        console.log('в милиметрах: ',this.m*1000, 'мм')
    }
}

const metr1 = new Metr(2131310)
metr1.Km()
metr1.Sm()
metr1.mm()