// if (переменная и значения) {
//     и тут задачи
// }

// const point = 77
// if (point > 85) {
//     console.log("mark: 4")
// }
 
// const bread = 30
// const money = 25
// if (bread <= money) {
//     console.log("Можно купить")
// }
// if (bread > money) {
//     console.log("не получиться купить")
// }

// const point = 55
// if (point >= 40) {
//     console.log("Прошел")
// } 
// else {
//     console.log("Не прошел")
// }

// const point = 86
// if (point >= 85) {
//     console.log(5)
// } else { // это такой способ заменить elif, иначе выйдут все остальные данные выйдут.           
//     if (point >= 60) {
//         console.log(4)
//     } else {
//         if (point >= 40) {
//             console.log(3)
//         } else {
//             console.log(2)
//         }
//     }
// }

// const point = 86
// if (point >= 85) {
//     console.log(5)
// } 
// else if (point >= 60) {
//     console.log(4)
// }
// else if (point >= 40) {
//     console.log(3)
// }
// else {
//     console.log(2)
// }

// else if - альтренативный(JavaScriptный) вариант elif в Python
// promt - фунция окно с ответом

// const age = 18
// if (age >= 18) {
//     console.log("Adult")
// }
// else if (age >= 17) {
//     console.log("Teenager")
// }
// else if (age >= 7) {
//     console.log("child")
// }
// else if (age >= 3) {
//     console.log("Baby")
// }
// else {
//     console.log("sleeping on stomach")
// }

// && - implise and
// || - implise or
// }

const nBread = 100;
const sBread = 80;
const BreadPrice = 20;
const money = 2000;

if (nBread <= sBread && nBread*BreadPrice <= money) {
    console.log("He can buy")
} 
else {
    console.log("He can't buy")
}

// испаользовать && и || можно бесконечно

// я использую тему Electron