// const button = document.querySelectorAll("button") // all - объязательно 

// console.log(button)

// for (let i = 0; i < button[length]; i++) { // button[length] - кол-во button (lenth => len)
//     button[i].onclick = () => {// [index] - так можно использовать одну кнопку из одинаковых 2-3 и более
//         button[i].style.backgroundColor = "red"
//     }
// } 

// button.forEach(
//     (button)=>{
//         button.onclick = () => {
//             button.style.backgroundColor = "red"
//         }
//     }
// )

// двое с верху способ использовать все кнопки без ошибок(второй самый оптимальный)

// button.forEach(
//     (button)=>{
//         button.onclick = () => {
//             button.style.backgroundColor = "red"
//         }
//     }
// )

// button.forEach(
//     (button)=>{
//         button.ondblclick = () => {
//             button.style.backgroundColor = "gray"
//         }
//     }
// )


// const box = document.querySelectorAll(".box")

// box.forEach(
//     (box)=>{
//         box.onclick = () => {
//             box.style.backgroundColor = box.innerText;
//         }
//     }
// )

// console.log(document.body.innerHTML)

// getElementById - ввытаскиваем конкретный объект из кода HTML
// body.innerHTML - записываем код Html в документ 

// const object = {} // это объект созданый в JS и не связан с HTML
// console.log(object)

// const user = {
//     name: "Ratmir",
//     age: 16
// } // внутри тоже можно задать эти значения
 
// // user.name = "Ratmir";
// // user.age = 16;

// // пожохе на коробку в которой разные переменные, одного пользователя например.
// console.log(user);

// const car = {
//     mark: "Lexus",
//     II: "352JH64LJH37674F236"
// }

// console.log(car)

//box.innerHTML += 'Мне больше чем тебе)' + '<br>';

const numbers = document.querySelectorAll('.number')
const input = document.querySelector('input')
const plus = document.querySelector('.plus')
const result = document.querySelector('.result')

numbers.forEach((number)=> {
    number.onclick = () => {
        input.value += number.innerText;
    }
})

plus.onclick = () => {
    input.value += '+';
}

result.onclick = () => {
    input.value += '=' + eval(input.value); // пишет внутри себя как 213+41 и видит числа с '+' потом слогает по знаку. 
}

