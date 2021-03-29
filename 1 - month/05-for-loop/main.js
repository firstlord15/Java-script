// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")
// document.write("Ratmir<br>")

// const tbody = document.querySelector("tbody") // так мы обращаемся к тегу <tbody> в html коде.

// for (let i = 0; i <= 10; i++) { // for - это цикл, i < 10 - до десети цикл работает; i++ - озночает i = i + 1
//    tbody.innerHTML += "<tr><td> "+i+" </td><td> "+i**2+" </td></tr>"
// }

// const ol = document.querySelector("ol")

// for (let i = 0; i <= 10; i++) { 
//     ol.innerHTML += "<li>"+ 2**i +"</li>"
// }

// // тадлица умножения
// const tbody = document.querySelector("tbody") 

// for (let i = 1; i <= 10; i++) {
//     let tr = "<tr>"
//     for (let e = 1; e <= 10; e++){
//         tr += "<td>"+i*e+"</td>"
//     }
//     tbody.innerHTML += tr + "</tr>"
// }

// const section = document.querySelector("section") 

// for (let i = 0; i <= 96; i++) {
//     section.innerHTML += '<div class = "box"></div>'
// }

const section = document.querySelector("section") 

for (let i = 0; i <= 96; i++) {
    setTimeout(()=>{ // setTimeout - появление этих элементов со временем
        section.innerHTML += '<div class = "box"></div>'
    },i*100) // i*100 - скорость появления(100ms(милясекунды))
}

