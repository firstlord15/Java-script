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

// class Metr {
//     m = 0

//     constructor(m) {
//         this.m = m
//     }

//     Km = () => {
//         console.log('в километрах: ', this.m/1000, 'км')
//     }

//     Sm = () => {
//         console.log('в сантиметрах: ',this.m*100, 'см')
//     }

//     mm = () => {
//         console.log('в милиметрах: ',this.m*1000, 'мм')
//     }
// }

// const metr1 = new Metr(2131310)
// metr1.Km()
// metr1.Sm()
// metr1.mm()


const list = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')
const li = document.querySelector('li')
// class Metr {
    
//     m = 0
    
//     constructor(m) {
//         this.m = m
//     }
    
//     km = () => {
//         console.log(this.m/1000)
//     }
    
//     cm = () => {
//         console.log(this.m*100)
//     }
// }

// const metr = new Metr(1000)
// metr.km()
// metr.cm()

let sm = 0;
let km = 0;
class Metr {
    m = 0
    constructor(m) {
        this.m = m
    }

    km = () => {
        km = this.m/1000
    }

    cm = () => {
        sm = this.m*100
    }
}
const metr = new Metr(0)
button.onclick = () => {
    metr.m = +input.value
    metr.km()
    metr.cm()
    let text = 'будет: '
    // const li = document.createElement("li");
    // li.className = "list-group-item";
    li.innerHTML = '<span class="product ml-1">'+text+'</span>' + '<span class="count ml-1">' + km+'km'+ '</span>' + '<span class="price ml-1">' + sm+'sm'+ '</span>'; 
    // list.appendChild(li); 
}

