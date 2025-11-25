// =============================== IF STATEMENT
// jadi if statement ini bakal di ekseskusi kalo misalnya if statement ini bernilai true
// synthax
/*
    if(condition) {
    code block
    }
*/
// kondisi false
const age: number = 11;
if (age >= 17) {
  console.log("Anda bisa buat KTP");
}
// kondisi true
const age1: number = 20;
if (age1 >= 17) {
  console.log("Anda bisa buat KTP");
}

// ================================= ELSE STATEMENT
// jadi else statement ini bakal di ekseskusi kalo misalnya if statement ini bernilai true
// atau bisa dikatakan dengan backup plan dari ef statement

const age2: number = 11;
if (age2 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}
// =================================== ELSE IF STATEMENT
// kalo misalnya kita mau buat kondisi lebih dari satu
// jadi kalo membuat kondisi lebih dari satu bisa menggunakan else if statement ini

const grade: string = "D";

if (grade === "A") {
  console.log("Nilai Anda Bagus");
} else if (grade === "B") {
  console.log("Nilai Anda Lumayan");
} else if (grade === "C") {
  console.log("Nilai Anda Buruk");
} else {
  console.log("Nilai Tidak Di Ketahui");
}

// ===================================== SWITCH CASE
// jadi switch case sebenernya mirip kayak if statement cuman biasanya switch case ini kita gunakan untuk decision making
// atau misalnya pilihan yang kita bandingkan itu cuman satu
// kondisinya tidak bisa komplex jadi tidak bisa pakai &&, ||
// setiap case harus dikasih break agar berhenti
const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari Senin");
    break;
  case "selasa":
    console.log("Hari Selasa");
    break;
  case "rabu":
    console.log("Hari Rabu");
    break;
  default:
    console.log("Hari Tidak Ditemukan");
    break;
}

// ================================== LOGICAL OPERATOR
// && => and
// || => or
// ! => not

// AND -> HARUS KEDUANYA BERNILAI TRUE AGAR MENGHASILKAN NILAI TRUE
const umur: number = 19;
const punyaSim: boolean = true;
//       true        true   -> true
if (umur >= 17 && punyaSim === true) {
  console.log("Anda Boleh Mengendarai Kendaraan");
} else {
  console.log("Anda Belum Boleh Mengendarai Kendaraan");
}

// atau gini juga bisa tanpa === true
if (umur >= 17 && punyaSim) {
  console.log("Anda Boleh Mengendarai Kendaraan");
} else {
  console.log("Anda Belum Boleh Mengendarai Kendaraan");
}

// OR -> KALAU SALAH SATU ADA YANG NILAINYA TRUE, AKAN MENGHASILKAN TRUE
const car: string = "mercy";
//         true           false      -> true
if (car === "mercy" || car === "bmw") {
  console.log("Ini mobil jerman");
} else {
  console.log("Ini mobil jepang");
}
// note : best practice menggunakan sama dengan 3 karena membandingkan tipe data dan valuenya, kalo sama dengan 2 hanya membandingkan value dari variabel nya saja

// NOT -> MEMBALIKKAN NILAI BOOLEAN
const isSunny: boolean = true;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ============================================== TERNARY OPERATOR
// ini adalah shortcut untuk if else statement
// condtion ? true : false
// versi biasanya :
const str: string = "javascripts";

if (str === "typescript") {
  console.log("ini typescript");
} else {
  console.log("not typescript");
}

// versi ternary operator
str === "typescript" ? "typescript" : "not typescript";
console.log(str === "typescript" ? "typescript" : "not typescript");
// note : ternary operator ini sering kita gunakan di front end di react sering kita pakai untuk menampilkan tampilan

// bagaimana kalo kondisinya lebih dari satu (tidak disarakan menggunakan ternary operator, bisa cuman nanti bakal menyuhsahkan kalian, membacanya lebih sulit)
// contoh lebih dari 1 kondisi
console.log(
  str === "typescript"
    ? "typescript"
    : str === "javascript"
    ? "javascript"
    : "not found"
);

// =========================================== LOOP STATEMENT(perulangan)
// jadi kita masuk ke loop statement atau perulangan jadi kalo biasanya temen temen ingin mau melakukan sesuatu
// terus kalian mau pengen sesuatu itu tampil berapa kali atau dilakukan berapa kali nah kalian bisa menggunakan looping
// LOOP STATEMENT ADALAH SEBUAH RANGKAIAN INSTRUKSI YANG DILAKUKAN BERULANGKALI HINGGA KONDISINYA TIDAK TERPENUHI

// tipe loop
// 1. for loop
// 2. while loop
// 3. do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variabel dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di ekseskusi di akhir setiap iterasi

//syntax :
/*
    for(statement1; statement2; statement3) {
        code block yang akan diulang
    }
    // setiap statement dipisahkan oleh titik koma ";"
*/

// contoh looping 5 kali
for (let i = 0; i < 6; i++) {
  console.log("Hello World");
}
// statement 1: best practice penamaan variabel itu dimulai dari i,j,k untuk let i nya, tapi boleh bebas
// statement 2: kondisi dari looping tersebut. jadi looping ini bakal terus berjalan kalo misalnya kondisi di statement 2 itu true, kalo kondisinya false looping tersebut akan false
// statement 3: kode yang di eksekusi di akhir setiap iterasi. berarti biasanya di statement ketiga ini kita bakal nambahin i nya ini di setiap iterasi nya, supaya apa, kalo misalnya ini selalu 0 berarti dia bakal looping terus dong, karena kondisinya selalu true.
// note : statement ke tiga akan di jalankan akhir banget setelah me running code block nya
// note : kalo di for loop biasanya gak pernah menemukan case menggunakan prefix, biasanya pakai postfix

// NESTED LOOP -> FOR LOOP DI DALAM FOR LOOP
for (let i = 0; i < 6; i++) {
  console.log("Hello World");
  for (let j = 0; j < 6; j++) {
    console.log("Hello Dunia");
  }
}

// WHILE LOOP ->
// WHILE LOOP INI MIRIP SEPERTI IF STATEMENT,
// JADI WHILE LOOP INI GAK KAYAK FOR LOOP ADA STATEMENT STATEMENTNYA, KALO WHILE LOOP HANYA BERDASARKAN KONDISI SAJA, SELAMA KONDISINYA ITU MASIH TRUE DIA BAKAL MELAKUKAN LOOPING NYA TERUS MENERUS

// syntax

let j: number = 11;
// kalo contoh i di kasih 0, akan melakukan infinite loop dan tidal muncul, karena tidak ada kondisi atau state untuk menambahkan value dari variabel i tersebut dan akan berkondisi true dan akan melakukan looping terus menerus hingga laptop kalian mati wkkw
while (j < 10) {
  console.log("Hello world");
}

// while loop itu melakukan pengecekkannya di awal
let i: number = 0;
while (i < 10) {
  console.log("Hello world");
  // maka di beri i++ agar nilai i bertambah
  i++;
}
// kapan kita pakai for loop dan while loop
// apakah data nya yang itu kalian ingin looping kalian dah tau batasnya itu sampek berapa, kalo datanya itu sudah tau batasnya sampek berapa pakai for loop
// kalo kalian gak tau mau seberapa datanya seberapa banyak yang mau di looping yaudah kita pakai while loop
// kalo udah masuk ke projek jarang pakai for loop atau pun while loop, karena kita pakai build in method dari javascriptnya

// DO WHILE LOOP -> SAMA KAYAK WHILE LOOP NAMUN DIA MELAKUKAN DO NYA DAHULU DAN PENGECEKKAN NYA DI AKHIR
// syntax dasarnya :
/*
do {} while ()
*/

let count: number = 1;

do {
  console.log("ini iterasi ke: " + count);
  count++;
} while (count <= 5);

// DO WHILE INI GAK PERNAH SEKALI PAKAI
// WHILE LOOP ITU LOOPING JUGA TAPI DIA MELAKUKAN PENGECEKKAN DI AWAL, KALO DO WHILE MELAKUKAN PENGECEKKANNYA SETELAH MELAKUKAN DO NYA SEKALI

// ====================================== BREAK
// break ini biasanya kita gunakan untuk menghentikan loop

// contoh case
let sum: number = 0;

while (true) {
  console.log("Sum : " + sum);

  if (sum >= 5) {
    break;
  }
  sum++;
}

// ======================================= CONTINUE
// melakukan skip pada loop
// contoh kalo mau mengskip angka 2 :
// use casenya kalo ingin menampilkan sesuatu, tapi pengen mengskip tampilan satu dahulu

for (let i = 0; i < 5; i++) {
  if (i === 2 || i === 3) continue;
  console.log(i);
}
