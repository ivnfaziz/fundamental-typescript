// VERSI JS :
// const message = "Hello World";

// VERSI TS :
// const message2: string = "Hello World";

// ============================ STRING BUILD IN METHOD
const nama: string = "BuBDi";
const message: string = "Hello World";
const nama1: string = "Budi";
const nama2: string = "Jack";
const nama3: string = "Unul";

// yang sering di pakai pada string build in method
console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B", "F"));
console.log(nama.replaceAll("B", "F"));
console.log(message.split(""));
console.log(nama1.concat(nama2.concat(nama3)));
console.log(nama1.concat(nama2).concat(nama3));
console.log(nama1 + nama2 + nama3);
console.log(nama3.slice(0, 2));
// 0 itu awal nya 4 itu pembatasnya array ke berapa jadi ngambil array 0 batas nya 2 jadi batasnya di u
// berarti yang diambil hanya U sama n

// ================================== TEMPLATE LITERALS/TEMPLATE STRING
const name4: string = "Carli";
const message3: string = `Welcome ${name4}`;
console.log("Welcome " + name4);
console.log(message3);

// ============================ NUMBER BUILD IN METHOD
const angka: string = "3000";
// cara cek type datanya pakai typeof
// Number(angka) atau parseInt(angks) itu di konversi ke angka
console.log(typeof Number(angka));
console.log(typeof angka);
console.log(typeof parseInt(angka));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ================================== STRING CONVERSION

const angka1: number = 20;
console.log(String(angka1));
console.log(angka1.toString());

// ================================== BOOLEAN CONVERSION

console.log(Boolean(1));
console.log(Boolean(-4));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("s"));

const boole: string = "true";
console.log(Boolean(boole));

const boole2: boolean = false;
console.log(String(boole2));

// ================================== DATE

const now: Date = new Date();
console.log(now);

// Get Method
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getTime());
console.log(now.getUTCDay());

// Set Method

now.setDate(10);
now.setMonth(8 - 1);
now.setFullYear(2058);
console.log(now);

// ================================== BASIC OPERATOR
/**
 * + => pertambahan
 * - => pengurangan
 * * => perkalian
 * / => pembagian
 * % => modulo (sisa bagi)
 * ** => pangkat
 */

console.log(2 + 3);
console.log(2 * 4);
console.log(5 % 3);
console.log(6 - 3);
console.log(20 / 8);
console.log(3 ** 7);

// ================================== MODIFY IN PLACE
// n = n + 2

let n: number = 4;
n += 2;
console.log(n);

// ================================== INCREMENT DAN DECREMENT

let counter: number = 1;

counter++;
// counter--

console.log(counter);

// ================================== POSTFIX DAN PREFIX

let counter2: number = 2;
let counter3: number = 3;

console.log(counter2++); //postfix
console.log(++counter3); //prefix

// ================================== COMPARISON OPERATOR

// ==
// ===
// <
// >
// <=
// >=
// !=
// !==

6 == 6;
// console.log(6 == "6"); //pengecekkan divaluenya saja
// console.log(6 === "6"); //pengecekkan divalue dan tipe datanya
console.log(5 < 6);
console.log(5 > 9);
console.log(5 >= 5);
console.log(5 <= 8);



