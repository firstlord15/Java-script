const button = document.querySelector('button')
const box = document.querySelector('.box')
const input = document.querySelector('input')
const checkbox = document.querySelector('#checkbox')
// button.onmouseover = () => {
//     box.style.marginLeft = '100px'
// }

// button.onclick = () => {
//     if (box.style.display == "none"){
//         box.style.display = "block";
//     } 
//     else {
//         box.style.display = "none";
//     }

// }

// button.onclick = () => { 
//     if (box.style.marginLeft == '148px'){
//         box.style.marginLeft = '0px'

//     } else {
//         box.style.marginLeft = '148px'
//     }
// }

// button.onclick = () => {
//     // console.log(input.value) // так можно писать значение написаное в этом input
//     box.innerHTML += input.value + '<br>'
//     if (input.value == "kandaysyn") {
//         box.innerHTML += "Жакшы Чмо" + '<br>'
//     }
// }

button.onclick = () => {
    if (checkbox.checked == false) {
       console.log("none")     
    } 
    else if (input.value == "Тебе сколько?"){
        box.innerHTML += 'Мне больше чем тебе)' + '<br>';
    } 
    else if (input.value == "Кто красивее всех на свете?"){
        box.innerHTML += 'я)' + '<br>';
    } 
    else if (input.value == "Кто живет хорошой жизню?"){
        box.innerHTML += 'не ты)' + '<br>';
    } 
    else if (input.value == "Кто тупее всех на свете?"){
        box.innerHTML += 'Ты)' + '<br>';
    }
    else {
        box.innerHTML += input.value + '<br>';     
    }
    input.value = "";
    input.focus();
}
