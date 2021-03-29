const arr = [1, 3, 5, 6, 2, 15, 31, 24, 16, 83, 11, 34, 56];
let sum = 0;

for (let i = 0; i < arr["length"]; i++) {
  console.log("index " + i, ":", arr[i]);
  sum = sum + arr[i];
}

console.log("сумма списка:", sum);
// let a = arr.sort();

let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Минимальное значение списка:", min);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("числа делящиеся на два:", arr[i]);
  }
}

console.log("Неотсортированный список:", arr);

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j + 1] < arr[j]) {
      let t = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = t;
    }
  }
}

console.log("Отсортированный список:", arr);


