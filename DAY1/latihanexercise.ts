/*
Latihan
Karena kamu sudah mengetahui tentang pseudocode, mari kita selesaikan latihan ini terlebih dahulu dengan pseudocode, lalu ubah ke dalam kode program!

● Tulis kode untuk menghitung luas persegi panjang.
  ○ Contoh: panjang = 5, lebar = 3
  ○ Output: 15

● Tulis kode untuk menghitung keliling persegi panjang.
  ○ Contoh: panjang = 5, lebar = 3
  ○ Output: 16

● Tulis kode untuk menghitung diameter, keliling, dan luas lingkaran.
  ○ Contoh: jari-jari = 5
  ○ Output: diameter = 10, keliling = 31.4159, luas = 78.539

● Tulis kode untuk menghitung sudut ketiga segitiga jika dua sudut telah diketahui.
  ○ Contoh: a = 80, b = 65
  ○ Output: 35

● Tulis kode untuk mengubah jumlah hari menjadi tahun, bulan, dan hari (Catatan: 1 tahun = 365 hari, 1 bulan = 30 hari).
  ○ Contoh: 400 hari → 1 tahun, 1 bulan, 5 hari
  ○ Contoh: 366 hari → 1 tahun, 0 bulan, 1 hari

● Tulis kode untuk menghitung selisih antara dua tanggal dalam hari.
  ○ Contoh: tanggal1 = 2022-01-20, tanggal2 = 2022-01-22
  ○ Output: 2

Terima Kasih! Terima Kasih!
*/

// 1
const panjang: number = 5;
const lebar: number = 3;
function persegiPanjang(panjang: number, lebar: number): number {
  return panjang * lebar;
}
console.log("ini kalo pakai function: ", persegiPanjang(panjang, lebar));
console.log("ini kalo pakai log biasa: ", panjang * lebar);

// 2
function kelilingPersegiPanjang(panjang: number, lebar: number): number {
  return 2 * (panjang + lebar);
}
console.log(kelilingPersegiPanjang(panjang, lebar));

// 3
const jari_jari: number = 5;
// diameter
function diameter(jari_jari: number): number {
  return 2 * jari_jari;
}
// keliling
function keliling(diameter: number): number {
  return Math.PI * diameter;
}
// luas
function luas(jari_jari: number): number {
  return Math.PI * jari_jari ** 2;
}
console.log(diameter(jari_jari));
console.log(keliling(diameter(jari_jari)).toFixed(4));
console.log(luas(jari_jari).toFixed(4));

// 4
const a: number = 80;
const b: number = 65;
function segitiga(a: number, b: number): number {
  return 180 - a - b;
}
console.log(`${segitiga(a, b)}°`);

// 5
// ● Tulis kode untuk mengubah jumlah hari menjadi tahun, bulan, dan hari (Catatan: 1 tahun = 365 hari, 1 bulan = 30 hari).
//   ○ Contoh: 400 hari → 1 tahun, 1 bulan, 5 hari
//   ○ Contoh: 366 hari → 1 tahun, 0 bulan, 1 hari

const hari: number = 366;

const tahun = Math.floor(hari / 365);
const sisaHariSetelahTahun = hari % 365;

const bulan = Math.floor(sisaHariSetelahTahun / 30);
const sisaHari = sisaHariSetelahTahun % 30;

console.log(`${tahun} tahun, ${bulan} bulan, ${sisaHari} hari`);

// ● Tulis kode untuk menghitung selisih antara dua tanggal dalam hari.
//   ○ Contoh: tanggal1 = 2022-01-20, tanggal2 = 2022-01-22
//   ○ Output: 2
let tanggal1: Date = new Date(2022, 0, 21);
let tanggal2: Date = new Date(2022, 0, 23);
let hari1: number = Math.abs(tanggal1.getDate() - tanggal2.getDate());
let bulan1: number = Math.abs(tanggal1.getMonth() - tanggal2.getMonth());
let tahun1: number = Math.abs(tanggal1.getFullYear() - tanggal2.getFullYear());
console.log(`${tahun1}-${bulan1}-${hari1}`);
