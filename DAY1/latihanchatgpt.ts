// 1.	Buat program untuk menampilkan "Halo Dunia" di console.
console.log("Halo Dunia");
// 2.	Simpan nama kamu dalam variabel nama dan tampilkan: "Halo, [nama]".
const nama: string = "Ivan";
console.log(`Halo, ${nama}`);
// 3.	Buat variabel umur bertipe number dan tampilkan typeof-nya.
const umur: number = 22;
console.log(typeof umur);
// 4.	Buat 5 variabel dengan tipe data: string, number, boolean, null, dan undefined.
const tipe1: string = "string";
const tipe2: number = 22;
const tipe3: boolean = true;
const tipe4: null = null;
const tipe5: undefined = undefined;
console.log(`ini tipe data: ${tipe1} ${tipe2} ${tipe3} ${tipe4} ${tipe5}`);
// 5.	Buat komentar satu baris dan komentar multi baris dalam kode kamu.
// ini comment 1
/* 
    - ini comment multi baris
    - multi baris
*/
// 6.	Gunakan let untuk menyimpan data dan ubah nilainya.
let data: string = "Ivan";
data = "Ilang";
console.log(data);
// 7.	Gunakan const untuk menyimpan data dan coba ubah nilainya (harus error).
const data1: string = "Ivan";
// data1 = "Jago";
console.log(data1);
// 8.	Buat variabel dengan nama yang sah dan yang tidak sah (komentar kenapa tidak sah).
// const delete: string = "ivan"
// tidak sah karena dia termasuk kedalam variabel yang ada node
// 9.	Tampilkan typeof dari semua variabel di atas.
console.log(
  typeof nama,
  typeof umur,
  typeof tipe1,
  typeof tipe2,
  typeof tipe3,
  typeof tipe4,
  typeof tipe5,
  typeof data,
  typeof data1
);
// 10.	Buat array berisi 3 hobi dan tampilkan semua item-nya.
const array = ["ivan", "banyak", "sangat", "indah"];
console.log(array);
// 11.	Buat string "JavaScript Itu Mudah" dan tampilkan versi lowercase dan uppercase-nya.
const java: string = "JavaScript Itu Mudah";
console.log(java.toLowerCase());
console.log(java.toUpperCase());
// 12.	Ubah semua huruf “a” menjadi “i” dalam string "Saya belajar JavaScript".
const belajar: string = "Saya belajar JavaScript";
console.log(belajar.replaceAll("a", "i"));
// 13.	Gunakan .split() untuk memecah kalimat menjadi array kata.
const kalimat: string = "Ini adalah kalimat yang dibuat oleh ivan";
console.log(kalimat.split(""));
// 14.	Potong kata "Pemrograman" agar hanya tampil “Pro”.
const kata: string = "Pemrograman";
const pro = kata.slice(0, 3);
console.log(pro);
// 15.	Gunakan template literal untuk menghasilkan: Halo, saya [nama], umur [umur] tahun.
console.log(`Halo, saya ${nama}, umut ${umur} tahun`);
// 16.	Tampilkan tanggal hari ini dalam format: YYYY-MM-DD.
const date: Date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
// 17.	Ubah string "1234" menjadi number dan tampilkan typeof-nya.
const menjadi: string = "1234";
console.log(typeof Number(menjadi));
// 18.	Ubah nilai 0, 1, "", "abc" menjadi boolean menggunakan Boolean().
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
// 19.	Buat variabel angka = 10, lalu gunakan +=, -=, *=, /= dan tampilkan hasilnya.
let angka: number = 10;
angka += 5;
console.log(angka);
angka -= 3;
console.log(angka);
angka *= 2;
console.log(angka);
angka /= 4;
console.log(angka);
// 20.	Tampilkan hasil: 2 + 3, 10 % 3, 2 ** 4.
const hasil: number = 2 + 3;
const hasil2: number = 10 % 3;
const hasil3: number = 2 ** 4;
console.log(`${hasil} ${hasil2} ${hasil3}`);
// 21.	Buat variabel counter = 0 lalu counter++, cetak hasil sebelum dan sesudah.
let counter: number = 1;
console.log(counter++);
// 22.	Tampilkan perbedaan a++ dan ++a dalam logika cetak.
// jawaban : jika a++ itu print dulu baru di tambah variabel digit nya, kalo ++a itu tambah dulu variabel digit nya baru di print
// 23.	Buat perbandingan dengan == dan ===, contoh: 5 == "5" dan 5 === "5".
// console.log(5 == "5"); // true, karena == membandingkan nilai saja
// console.log(5 === "5"); // false, karena === membandingkan nilai dan tipe data
// 24.	Buat fungsi isAdult(age) yang mengembalikan true jika age >= 18.
const age: number = 18;
function isAdult(age: number): boolean {
  return age >= 18;
}
console.log(isAdult(age));
// 25.	Buat fungsi isEven(number) yang mengembalikan true jika genap, false jika ganjil.
const number1: number = 18;
function isEven(number: number): boolean {
  return number % 2 == 0;
}
console.log(isEven(number1));
// 26.	Buat file .ts dengan variabel let umur: number = 25 dan tampilkan nilainya.
let umur1: number = 25;
console.log(umur1);
// 27.	Buat fungsi greet(name: string): string yang mengembalikan “Halo, [name]”.
const name: string = "Ivan";
function greet(name: string): string {
  return `Halo, ${name}`;
}
console.log(greet(name));
// 28.	Buat type User = { nama: string; umur: number; aktif: boolean } dan buat satu objek user.
type User = { nama: string; umur: number; aktif: boolean };
const user: User = { nama: "Ivan", umur: 22, aktif: true };
console.log(user);
// 29.	Buat array let buah: string[] = ['apel', 'mangga'] dan tampilkan semuanya pakai loop.
let buah: string[] = ["apel", "mangga"];
for (const item of buah) {
  console.log(item);
}
// 30.	Buat fungsi hitungLuasPersegi(sisi: number): number yang mengembalikan luas persegi.
const persegi: number = 25;
function hitungLuasPersegi(sisi: number): number {
  return sisi * sisi;
}
console.log(hitungLuasPersegi(persegi));
