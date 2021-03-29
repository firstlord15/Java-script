const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let sum = 0;

// for (let i = 0; i < arr["length"]; i++) {
//   console.log("index " + i, ":", arr[i]);
//   sum = sum + arr[i];
// }

// console.log("сумма списка:", sum);
// let a = arr.sort();

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("Минимальное значение списка:", min);

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         console.log("числа делящиеся на два:",arr[i])
//     }
// }

let arr2 = [];

let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
}
