arr2 = [4,1,7,3,9,21]

// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j + 1] < arr[j]) {
//       let t = arr[j + 1]
//       arr[j + 1] = arr[j]
//       arr[j] = t
//     }
//   }
// }

// console.log(arr2.sort((a, b) => a-b))

const sortic = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let e = i; e < arr.length; e++){
            if (arr[e] < arr[i]){
                const arri = arr[i] // мы сохраняем значение
                arr[i] = arr[e] // здесь меня местами
                arr[e] = arri // потом меняем arr[e], с сохраненным arr[i] в arri
            }
        }
    } 
}

console.log(sortic(arr2))

// console.log(arr)