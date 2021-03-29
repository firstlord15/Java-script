// // const users = [
// //     {username:"asan",age:17},
// //     {username:"hasan",age:18},
// //     {username:"lasan",age:13},
// //     {username:"masan",age:17},
// //     {username:"tusan",age:18},
// //     {username:"awsan",age:17},
// //     {username:"hasdan",age:18},
// //     {username:"lawsan",age:17},
// //     {username:"madsan",age:17},
// //     {username:"tusfan",age:18},
// //     {username:"asqan",age:17},
// //     {username:"hadsan",age:18},
// //     {username:"lafsan",age:13},
// //     {username:"maqsan",age:17},
// //     {username:"tufsan",age:18},
// // ]

// // const count_user = (age) => {
// //     let ageNum = []
// //     for (let i = 0; i < users.length; i++){
// //         if (age === users[i].age){
// //             ageNum.push(users[i].age)
// //         }
// //     }
// //     return ageNum.length
// // }

// // count_user(17)

// // const filterEven = (arr) => {
// //     for (let i = 0; i < arr.length; i++){
// //         let result = []
// //         if (arr[i] % 2 === 0){
// //             result.push(arr[i])
// //         }
// //     }
// //     return result
// // }

// // console.log(filterEven([ 3,2, 2, 3, 4 ]))

// // const square = (arr) => {
// //     let squareNum = []
// //     for (let i = 0; i < arr.length; i++){
// //         squareNum.push(arr[i]**2) 
// //     }
// //     return squareNum
// // }

// // console.log(square([6,7,3,6,3]))

// // const filterEven = (arr) => {
// //     for (let i = 0; i < arr.length; i++){
// //         if (arr[i] % 2 == 0){
// //             arr[i] = arr[i]
// //         }
// //     }
// //     return arr 
// // }

// // console.log(filterEven([ 3, 2, 2, 3, 4 ]))
// // console.log(filterEven([ 3, 2, 6, 7, 8, 3, 9 ]))

// // const login = (username,password) => {
// //     let otvet = true
// //     for (let i = 0; i < users.length; i++){
// //         if (username === users[i].username && password === users[i].password){
// //             return true
// //         } else {
// //             return false
// //         }
// //     }
// // }

// const is_prime = (num) => {
//     for (let i = 2; i < num; i++){
//         if (num % i !== 0) {
//             return true 
//         } else {
//             return false
//         }
//     }
// }

// console.log(is_prime(6))
// console.log(is_prime(17))
// console.log(is_prime(9))
// console.log(is_prime(16))

const users = [
    {username:"asan",password:"123"},
    {username:"hasan",password:"1235"},
    {username:"lasan",password:"1423"},
    {username:"masan",password:"1223"},
    {username:"tusan",password:"1523"},
]

const login = (username, password) => {
    for (let i = 0; i < users.length; i++){
        if (users[i].username && users[i].password === username && password){
            return true
        } else {
            return false
        }
    }
}

console.log(login("asan","123"))
console.log(login("lasan","123"))
console.log(login("aasan","123"))
console.log(login("tusan","1523"))
console.log(login("lalala","123"))