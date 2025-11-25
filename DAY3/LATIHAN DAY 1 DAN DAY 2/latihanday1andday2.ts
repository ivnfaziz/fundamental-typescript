// 1.	Deklarasi Variabel
// o	Buatlah variabel untuk menyimpan nama, umur, dan status pernikahan seseorang
// o	Contoh: nama = "Ahmad", umur = 25, menikah = false
const nama: string = "Ahmad";
const umur: number = 25;
const menikah: boolean = false;

console.log(`Nama: ${nama}`);
console.log(`Umur: ${umur}`);
console.log(`Status: ${menikah ? "Menikah" : "Belum Menikah"}`);

// 2.	Konversi Data Types
// o	Buatlah kode untuk mengubah string "123" menjadi number, kemudian tampilkan tipenya
// o	Contoh: "123" → 123 (number)
const number: string = "123";
console.log(`${Number(number)} (${typeof Number(number)})`);

// 3.	Template Literals
// o	Buatlah kode yang menggabungkan nama dan umur menggunakan template literals
// o	Contoh: nama = "Sari", umur = 20 → "Halo, nama saya Sari dan umur saya 20 tahun"
const nama1: string = "Sari";
const umur1: number = 20;
console.log(`Halo, nama saya ${nama1} dan umur saya ${umur1} tahun`);

// 4.	String Methods
// o	Buatlah kode untuk mengubah string "JAVASCRIPT" menjadi huruf kecil dan ganti huruf "A" dengan "O"
// o	Contoh: "JAVASCRIPT" → "jovoscript"
const str: string = "JAVASCRIPT";
console.log(str.toLowerCase().replaceAll("a", "0"));

// 5.	Boolean Conversion
// o	Buatlah kode untuk mengecek nilai truthy/falsy dari: "", 0, "hello", [], null
// o	Tampilkan hasilnya menggunakan Boolean()
const nilai: any = null;
if (nilai) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// 6.	Date Object
// o	Buatlah kode untuk menampilkan tanggal, bulan, dan tahun hari ini
// o	Format: "Hari ini tanggal 1 Juli 2025"
const date: Date = new Date();
console.log(
  `hari ini tanggal ${date.getDay()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`
);

// 7.	Operator Matematika
// o	Buatlah kode untuk menghitung hasil dari: (10 + 5) * 3 - 2 ** 2
// o	Tampilkan setiap langkah perhitungannya
const hitung1: number = 10 + 5;
const hitung2: number = 2 ** 2;
const hitung3: number = hitung1 * 3;
const hitung4: number = hitung3 - hitung2;
console.log(`(10 + 5) * 3 - 2 ** 2 = ${hitung4}`);

// 8.	Modulo Operator
// o	Buatlah kode untuk mencari sisa bagi dari 17 dibagi 5
// o	Contoh: 17 % 5 = 2
const modulo: number = 17 % 5;
console.log(`17 % 5 = ${modulo}`);

// 9.	Increment/Decrement
// o	Buatlah kode yang menunjukkan perbedaan antara ++a dan a++
// o	Mulai dengan a = 5
let a: number = 5;
let b: number = 5;
console.log(`${a++} ${++b}`);

// 10.	Comparison Operator
// o	Buatlah kode untuk membandingkan "5" == 5 dan "5" === 5
// o	Jelaskan perbedaannya
// console.log(5 === "5");
// console.log("5" == 5);
// jika === ini membandingkan value dari variabel beserta tipe datanya
// jika == ini membandingkan hanya value dari variabelnya

// 11.	If Statement Dasar
// o	Buatlah kode untuk mengecek apakah seseorang sudah cukup umur untuk menonton film 17+
// o	Contoh: umur = 16 → "Belum cukup umur"
const cekumur: number = 100;
if (cekumur >= 17) {
  console.log("Cukup umur");
} else {
  console.log("Belum cukup umur");
}

// 12.	If-Else
// o	Buatlah kode untuk mengecek apakah sebuah angka positif atau negatif
// o	Contoh: angka = -5 → "Angka negatif"
const angka: number = -1;
if (angka < 0) {
  console.log("Angka negatif");
} else {
  console.log("Angka positif");
}

// 13.	Else-If
// o	Buatlah kode untuk menentukan grade berdasarkan nilai:
// o	90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: E
const nilaiku: number = 60;
if (nilaiku >= 90 && nilaiku <= 100) {
  console.log("A");
} else if (nilaiku >= 80 && nilaiku <= 89) {
  console.log("B");
} else if (nilaiku >= 70 && nilaiku <= 79) {
  console.log("C");
} else if (nilaiku >= 60 && nilaiku <= 69) {
  console.log("D");
} else if (nilaiku >= 0 && nilaiku <= 59) {
  console.log("E");
} else {
  console.log("Invalid");
}

// 14.	Switch Case
// o	Buatlah kode untuk menampilkan nama bulan berdasarkan angka 1-12
// o	Contoh: bulan = 7 → "Juli"
const bulan: number = 100;
switch (bulan) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Maret");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Mei");
    break;
  case 6:
    console.log("Juni");
    break;
  case 7:
    console.log("Juli");
    break;
  case 8:
    console.log("Agustus");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Oktober");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("Desember");
    break;
  default:
    console.log("Masukkan angka bulan dengan benar");
    break;
}

// 15.	Logical Operator AND
// o	Buatlah kode untuk mengecek apakah seseorang bisa masuk klub (umur >= 18 DAN punya kartu member)
// o	Contoh: umur = 20, member = true → "Boleh masuk"
const umurku: number = 18;
const kartumember: boolean = true;

if (umurku >= 18 && kartumember) {
  console.log("Boleh masuk");
} else {
  console.log("Tidak boleh masuk");
}

// 16.	Logical Operator OR
// o	Buatlah kode untuk mengecek apakah hari ini weekend (Sabtu ATAU Minggu)
// o	Contoh: hari = "Sabtu" → "Hari weekend"
const hari: string = "sabtu";

if (hari === "sabtu" || hari === "minggu") {
  console.log("Hari weekend");
} else {
  console.log("Bukan hari weekend");
}

// 17.	Logical Operator NOT
// o	Buatlah kode untuk mengecek apakah cuaca TIDAK hujan
// o	Contoh: hujan = false → "Cuaca cerah"
const hujan: boolean = false;

if (!hujan) {
  console.log("Cuaca cerah");
} else {
  console.log("Cuaca hujan");
}

// 18.	Ternary Operator
// o	Buatlah kode untuk mengecek apakah angka genap atau ganjil menggunakan ternary
// o	Contoh: angka = 7 → "Ganjil"
const angka1: number = 1;
console.log(`angka = ${angka1} -> ${angka1 % 2 === 0 ? "Genap" : "Ganjil"}`);

// 19.	Nested Ternary
// o	Buatlah kode untuk menentukan kategori umur: anak (<13), remaja (13-17), dewasa (>=18)
// o	Gunakan nested ternary operator
const umuranak: number = 18;
console.log(
  `umur: ${umuranak} tahun, masuk kategori: ${
    umuranak < 13 ? "anak" : umuranak <= 17 ? "remaja" : "dewasa"
  }`
);

// 20.	Complex Condition
// o	Buatlah kode untuk mengecek apakah seseorang bisa mendapat diskon:
// o	(umur >= 60 ATAU student = true) DAN pembelian >= 100000
const umur2: number = 40;
const student: boolean = false;
const pembelian: number = 100000;

if ((umur2 >= 60 || student) && pembelian >= 100000) {
  console.log("Diskon 100 persen");
} else {
  console.log("Tidak mendapatkan diskon");
}

// 21.	Switch dengan Multiple Cases
// o	Buatlah kode untuk menentukan musim berdasarkan bulan:
// o	Des-Feb: Musim Hujan, Mar-Mei: Musim Kemarau, Jun-Agu: Musim Kering, Sep-Nov: Musim Pancaroba
const bulan1: string = "Jan";
switch (bulan1) {
  case "Des":
  case "Feb":
  case "Jan":
    console.log("Musim Hujan");
    break;
  case "Mar":
  case "Apr":
  case "Mei":
    console.log("Musim Kemarau");
    break;
  case "Jun":
  case "Jul":
  case "Agu":
    console.log("Musim Kering");
    break;
  case "Sep":
  case "Okt":
  case "Nov":
    console.log("Musim Pancaroba");
    break;
  default:
    console.log("Bulan tidak valid");
    break;
}

// 22.	Truthy/Falsy Check
// o	Buatlah kode untuk mengecek apakah variable nama tidak kosong
// o	Jika kosong tampilkan "Nama harus diisi"
const nama2: string = "";

if (!nama2) {
  console.log("Nama harus diisi");
}

// 23.	Grade dengan Kompleks Condition
// o	Buatlah sistem grading yang juga mempertimbangkan kehadiran:
// o	Nilai >= 80 DAN kehadiran >= 75% = A, dst.

const nilai3: number = 80;
const kehadiran: number = 75;

if (nilai3 >= 80 && kehadiran >= 75) {
  console.log("A");
} else if (nilai3 >= 70 && nilai3 < 80 && kehadiran >= 75) {
  console.log("B");
} else if (nilai3 >= 60 && nilai3 < 70 && kehadiran >= 75) {
  console.log("C");
} else if (nilai3 < 60 && kehadiran >= 75) {
  console.log("D");
} else {
  console.log("E");
}

// 24.	Login Validation
// o	Buatlah kode untuk validasi login sederhana
// o	Username = "admin" DAN password = "123456"
const username: string = "admin";
const password: string = "123456";

if (username !== "admin" || password !== "123456") {
  console.log("username atau password anda salah");
}

// 25.	Kategori BMI
// o	Buatlah kode untuk menentukan kategori BMI:
// o	<18.5: Underweight, 18.5-24.9: Normal, 25-29.9: Overweight, >=30: Obese
const BMI: number = 29;

console.log(
  `${
    BMI < 18.5
      ? "Underweight"
      : BMI >= 18.5 && BMI <= 24.9
      ? "Normal"
      : BMI >= 25 && BMI <= 29.9
      ? "Overweight"
      : "Obese"
  }`
);

// 26.	For Loop Dasar
// o	Buatlah kode untuk mencetak angka 1 sampai 10
// o	Output: 1 2 3 4 5 6 7 8 9 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 27.	For Loop Mundur
// o	Buatlah kode untuk mencetak angka 10 sampai 1 (mundur)
// o	Output: 10 9 8 7 6 5 4 3 2 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 28.	For Loop dengan Step
// o	Buatlah kode untuk mencetak angka genap dari 2 sampai 20
// o	Output: 2 4 6 8 10 12 14 16 18 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 29.	While Loop
// o	Buatlah kode menggunakan while loop untuk mencetak "Hello" sebanyak 5 kali
// o	Gunakan counter untuk mengontrol loop
const counter: number = 5;
for (let i = 1; i <= counter; i++) {
  console.log("Hello");
}

// 30.	Do-While Loop
// o	Buatlah kode menggunakan do-while untuk meminta input sampai user memasukkan "exit"
// o	(simulasi dengan array input)
const input4 = ["halo", "lagi", "exit", "jisajd", "asdkam"];

let idx = 0;
let userInput: string;
do {
  userInput = input4[idx];
  console.log(userInput);
  idx++;
} while (userInput !== "exit" && idx < input4.length);

// 31.	Nested Loop - Pattern Bintang
// o	Buatlah kode untuk mencetak pattern:
// 	*
// 	**
// 	***
// 	****
// 	*****
const totalRows = 5;

for (let i = 1; i <= totalRows; i++) {
  let line = "";
  for (let j = 1; j <= totalRows - i; j++) {
    line += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += "*";
  }

  console.log(line);
}

// 32.	Loop dengan Break
// o	Buatlah kode untuk mencari angka pertama yang habis dibagi 7 dari range 1-50
// o	Hentikan loop saat ketemu
for (let i = 1; i <= 50; i++) {
  console.log(i);

  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}

// 33.	Loop dengan Continue
// o	Buatlah kode untuk mencetak angka 1-10 kecuali angka 5 dan 8
// o	Gunakan continue statement
for (let i = 0; i <= 10; i++) {
  if (i === 5 || i === 8) continue;
  console.log(i);
}

// 34.	Menghitung Jumlah
// o	Buatlah kode untuk menghitung jumlah dari angka 1 sampai N
// o	Contoh: N = 5 → 1+2+3+4+5 = 15
const N: number = 5;
let sum: number = 0;
let message: string = "";

for (let i = 1; i <= N; i++) {
  console.log((sum += i));
  if (i === N) {
    message += i + "";
  } else {
    message += i + " + ";
  }
}

console.log(`N = ${N} -> ${message} = ${sum}`);

// 35.	Faktorial
// o	Buatlah kode untuk menghitung faktorial dari sebuah angka
// o	Contoh: 5! = 5×4×3×2×1 = 120
const faktorial: number = 5;
let message1: string = "";
let sum1: number = 1;

for (let i = faktorial; i >= 1; i--) {
  sum1 *= i;
  if (i === 1) {
    message1 += i;
  } else {
    message1 += i + " x ";
  }
}
console.log(`${faktorial}! = ${message1} = ${sum1}`);

// 36.	Bilangan Prima
// o	Buatlah kode untuk mengecek apakah sebuah angka adalah bilangan prima
// o	Contoh: 7 → "7 adalah bilangan prima"
const prima: number = 7;
let isPrime: boolean = true;

if (prima <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < prima; i++) {
    if (prima % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);
console.log(
  `${prima} -> ${prima} adalah ${
    isPrime ? "bilangan prima" : "bukan bilangan prima"
  }`
);

// 37.	Fibonacci
// o	Buatlah kode untuk mencetak N angka pertama dari deret Fibonacci
// o	Contoh: N = 7 → 0 1 1 2 3 5 8
const fibo: number = 7;
let f: number = 0;
let g: number = 1;
let sum4: number = 0;
console.log(f);
console.log(g);

console.log();
for (let i = 2; i < fibo; i++) {
  let c = f + g;
  console.log(c);
  f = g;
  g = c;
}

// 38.	Mencari Nilai Terbesar
// o	Buatlah kode untuk mencari nilai terbesar dari array [3, 7, 2, 9, 1, 5]
// o	Gunakan loop, jangan pakai Math.max()
const array = [10, 5, 30, 25, 7];
let terbesar = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > terbesar) {
    terbesar = array[i];
  }
}
console.log("Angka terbesar :", terbesar);

// 39.	Menghitung Digit
// o	Buatlah kode untuk menghitung jumlah digit dari sebuah angka
// o	Contoh: 12345 → 5 digit
const digit: number = 123;
const jumlahDigit = digit.toString().length;

console.log(jumlahDigit);

// 40.	Reverse Number
// o	Buatlah kode untuk membalik urutan digit sebuah angka
// o	Contoh: 12345 → 54321
const reverse: number = 12345;
const jumlahreverse = Number(reverse.toString().split("").reverse().join(""));
console.log(jumlahreverse);

// 41.	Kalkulator Sederhana
// o	Buatlah kode untuk kalkulator dengan operasi +, -, *, /
// o	Input: angka1, operator, angka2
const angka2: number = 10;
const operator: string = "-";
const angka3: number = 5;

let hasil: number;

if (operator === "+") {
  hasil = angka2 + angka3;
} else if (operator === "-") {
  hasil = angka2 - angka3;
} else if (operator === "*") {
  hasil = angka2 * angka3;
} else if (operator === "/") {
  if (angka3 !== 0) {
    hasil = angka2 / angka3;
  } else {
    console.log("Error: pembagian dengan nol!");
    hasil = NaN;
  }
} else {
  console.log("Operator tidak dikenal");
  hasil = NaN;
}

console.log("Hasil:", hasil);

// 42.	Konversi Suhu
// o	Buatlah kode untuk konversi Celsius ke Fahrenheit dan sebaliknya
// o	Celsius to Fahrenheit: (C × 9/5) + 32
// o	Fahrenheit to Celsius: (F - 32) × 5/9
const input1: number = 2;
const input2: number = 35.6;
const ctof: number = (input1 * 9) / 5 + 32;
const ftoc: number = ((input2 - 32) * 5) / 9;

console.log(ctof);
console.log(ftoc);

// 43.	Sistem Parkir
// o	Buatlah kode untuk menghitung biaya parkir:
// o	2 jam pertama: Rp 5000
// o	Jam berikutnya: Rp 2000/jam
// o	Maksimal: Rp 15000
const jam: number = 7;
let bayar: number = 0;
let message2: string = "";

if (jam >= 7) {
  bayar += 15000;
} else if (jam >= 0 && jam <= 2) {
  bayar += 5000;
} else if (jam <= 6 && jam >= 3) {
  bayar += 5000;
  for (let i = 3; i <= jam; i++) {
    bayar += 2000;
  }
} else {
  console.log((message2 += "Invalid Input"));
}

console.log(`Total biaya parkir: Rp. ${bayar}` || `${message2}`);

// 44.	Validasi Password
// o	Buatlah kode untuk validasi password dengan kriteria:
// o	Minimal 8 karakter
// o	Harus ada angka
// o	Harus ada huruf besar dan kecil
