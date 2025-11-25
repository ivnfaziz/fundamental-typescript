/*
Latihan
● Buatlah kode untuk memeriksa apakah sebuah angka ganjil atau genap
  ○ Contoh: 25 → angka ganjil, 2 → angka genap

● Buatlah kode untuk memeriksa apakah sebuah angka adalah bilangan prima atau bukan
  ○ Contoh: 7 → 7 adalah bilangan prima
  ○ Contoh: 6 → 6 bukan bilangan prima

● Buatlah kode untuk menghitung jumlah dari angka 1 sampai N
  ○ Contoh: 5 → 1 + 2 + 3 + 4 + 5 = 15
  ○ Contoh: 3 → 1 + 2 + 3 = 6

● Buatlah kode untuk menghitung faktorial dari sebuah angka
  ○ Contoh: 4! → 4 x 3 x 2 x 1 = 24
  ○ Contoh: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

● Buatlah kode untuk mencetak N angka pertama dari deret Fibonacci
  ○ Contoh: 15 → 610
*/
// 1
const angka = 2;
if (angka % 2 === 0) {
    console.log("Ini Genap");
}
else {
    console.log("Ini Ganjil");
}
// 2
const prima = 97;
let isPrime = true;
if (prima <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i < prima; i++) {
        if (prima % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime);
/*
● Buatlah kode untuk menghitung jumlah dari angka 1 sampai N
  ○ Contoh: 5 → 1 + 2 + 3 + 4 + 5 = 15
  ○ Contoh: 3 → 1 + 2 + 3 = 6
*/
const input = 5;
let sum3 = 0;
let message = "";
for (let i = 1; i <= input; i++) {
    sum3 += i;
    if (i === input) {
        message += i + "";
    }
    else {
        message += i + " + ";
    }
}
console.log(sum3);
console.log(message + " = " + sum3);
/*
● Buatlah kode untuk menghitung faktorial dari sebuah angka
  ○ Contoh: 4! → 4 x 3 x 2 x 1 = 24
  ○ Contoh: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
const num1 = 4;
let sum = 1;
let message1 = "";
for (let i = num1; i >= 1; i--) {
    sum *= i;
    if (i === 1) {
        message1 += i + "";
    }
    else {
        message1 += i + " x ";
    }
}
console.log(sum);
console.log(message1 + " = " + sum);
// ● Buatlah kode untuk mencetak N angka pertama dari deret Fibonacci
//   ○ Contoh: 15 → 610
const input1 = 15;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i <= input1; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
export {};
