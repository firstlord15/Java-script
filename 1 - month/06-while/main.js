// const button = document.querySelector("button")
// const container = document.querySelector("#container") // если в коде Html есть у какого-то элемента id, 
// и его надо вызвать то мы пишем название id 

// let counter = 0;

// while (counter < 10) {
//     counter++;
//     container.innerHTML += '<div class="box"></div> ';
// }

// button.onclick = () => { // onclick - когда нажимают
//     let counter = 0;

//     while (counter < 5) {
//         counter++;
//         container.innerHTML += '<div class="box"></div> ';
//     }
// }

// const tbody = document.querySelector("tbody");
// let e = 0;
// let qr = 0;

// button.onclick = () => {
//     let i = 0;
//     while(i <= 5) {
//         i++;
//         e += 1
//         qr = e**2 
//         tbody.innerHTML += "<tr><td>"+e+"</td><td>"+qr+"</td></tr>"
//     }
// }

// let c = 2;
// const number = 60;

// while(c < number) {
//     c += 1;
//     if (number % c == 0) {
//         console.log(c);
//     }
// }

// let num = 0;

// while (num < 100) {
//     num++
//     if (num % 2  != 0) {
//         console.log(num)
//     }
// }

const numbers = [1,2,3,343,124,431,214];
// let sum = 0;

// for (let i = 0; i<7; i++) {
//     console.log('index: '+i, 'numbers: '+ numbers[i]);
//     sum += numbers[i] // так можно найти сумму
// }
// console.log("Summa: "+ sum)

let sum = 0;

for (let i = 0; i < 7; i++) {
    if (numbers[i] % 2 == 0) {
        sum += numbers[i];
    } 
}
console.log(sum)