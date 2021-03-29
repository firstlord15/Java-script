list = ["Asan Hasanov", "Ratmir Ashimov", "Chynarber Lohanov", "Mahat Lahanov", "alalala malalal"]

// простой метод
// console.log(names.find((name) => name === "Mahat Lahanov"))


list.find(
    (name, index) => {
        if (name === "Mahat2 Lahanov"){
            console.log(name, index)
        } else {
            return false
        }
    }
)

// первый мой метод(ручной)

// let n = list.length

// for (let i = 0; i < n; i++){
//     if ("Mahat Lahanov" == list[i]){
//         console.log(list[i], i)
//     }
// }

// второй forEach метод учительский(ручной)

// list.forEach(
//     (name, index) => {
//         if (name === "Mahat Lahanov"){
//             console.log(name, index)
//         }
//     }
// )