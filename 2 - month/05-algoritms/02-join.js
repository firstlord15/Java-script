names = [ 'Asan', 'Hasan', 'Lasan', 'Tasan','Tusan' ]
let zap = ""

console.log(names.join(", ")) // простой метод

// первый ручной вариант

// n = names.length

// for (let i = 0; i < n; i++){
//     if (i === n - 1){
//         zap += names[i]
//     } else {
//         zap += names[i] + ", "
//     }
// }

// второй ручной вариант

// names.forEach((name, index) => {
//     if (index === names.length-1){
//         zap += name 
//     } else {
//         zap += name + ", "
//     }
// });

console.log(zap)