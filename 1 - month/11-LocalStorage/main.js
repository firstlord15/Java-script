const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('.Save');
const button2 = document.querySelector('.Reset');
const button3 = document.querySelector('.dil')


const json = localStorage.getItem("guest");
let guest = JSON.parse(json);

const addGuest = (guestName) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = guestName;
    const x = document.createElement("button");
    x.className = "float-right btn btn-danger";
    x.innerText = "x";
    x.onclick = () => {
        guest = guest.filter((item)=>{return item !== guestName});
        const json = JSON.stringify(guest);
        localStorage.setItem("guest",json);
        li.remove();  
    }   
    li.appendChild(x);
    list.appendChild(li);
}

// const storage = localStorage.getItem("guest")
// let guest = []

// try { // try - попытайся
//     guest = JSON.parse(storage);
//     if (!Array.isArray(guest)){ // Array.isArray - массив ли?,  ! - как частица не, типо, не является массивом.
//         guest = []
//     }
// } catch {
//     guest = [];
// }

guest.forEach((item) => {
    addGuest(item)
});

input.focus() // выделяет input - переменую

button.onclick = () => {
    let soder = input.value;
    if (soder.trim() === "") {
    } else {
        addGuest(input.value)
        // list.innerHTML += '<li class="list-group-item">'+ input.value +'</li>'
        guest.push(input.value); // push - добавляет как append
        const json = JSON.stringify(guest);
        console.log(json);
        localStorage.setItem("guest", json); // ("guest", json) - (текст, формат)
    }
    input.value = ''
}

button2.onclick = () => { // так мы все стерли
    const vera = confirm("Вы уверены?")
    if (vera === false) {
        alert("Ok")
    } else {
        list.innerHTML = '';
        localStorage.setItem('guest', '[]')
    }
    input.value = ''
}

// button3.onclick = () => {
//     li.slice
// }
