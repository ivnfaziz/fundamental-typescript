// 1.Buat program untuk menampilkan "Halo Dunia" di console.
console.log("Halo Dunia");
// 2.Simpan nama kamu dalam variabel nama dan tampilkan: "Halo, [nama]".
var nama: string = "Ivan";
console.log(`Halo, ${nama}`);
// 3.Buat variabel umur bertipe number dan tampilkan typeof-nya.
const umur: number = 22;
console.log(typeof umur);
// 4.Buat 5 variabel dengan tipe data: string, number, boolean, null, dan undefined.
const tipe1: string = "Namaku";
const tipe2: number = 29;
const tipe3: boolean = true;
const tipe4: null = null;
let tipe5;

console.log(tipe1 + " " + tipe2 + " " + tipe3 + " " + tipe4 + " " + tipe5);

// 5.Buat komentar satu baris dan komentar multi baris dalam kode kamu.
// ini komentar
/*
ini komentar
dua baris
*/

// 6.Gunakan let untuk menyimpan data dan ubah nilainya.
let ubah: string = "Data 1";
ubah = "Data 2";
console.log(ubah);

// 7.Gunakan const untuk menyimpan data dan coba ubah nilainya (harus error).
const ubah2: string = "Data 3";
// ubah2 = "Data 4"
console.log(ubah2);

// 8.Buat variabel dengan nama yang sah dan yang tidak sah (komentar kenapa tidak sah)
// const for: string = "Jika"
// karena ini termasuk nama variabel yang dilarang oleh typescript

// 9.Tampilkan typeof dari semua variabel di atas.

// 10.Buat array berisi 3 hobi dan tampilkan semua item-nya.
const hobi = ["Musik", "Bermain", "Karate"];
console.log(hobi);

// 11.Buat string "JavaScript Itu Mudah" dan tampilkan versi lowercase dan uppercase-nya.
const java: string = "JavaScript Itu Mudah";
console.log(java.toLowerCase());
console.log(java.toUpperCase());

// 12.Ubah semua huruf “a” menjadi “i” dalam string "Saya belajar JavaScript".
const java1: string = "Saya belajar JavaScript";
console.log(java1.replaceAll("a", "i"));

// 13.Gunakan .split() untuk memecah kalimat menjadi array kata.
const split1: string = "cara jago ngoding";
console.log(split1.split(" "));

// 14.Potong kata "Pemrograman" agar hanya tampil “Pro”.
const pro: string = "Pemrograman";
console.log(pro.slice(0, 1) + pro.slice(3, 5));

// 15.Gunakan template literal untuk menghasilkan: Halo, saya [nama], umur [umur] tahun.
const nama1: string = "ivan"
const umur1: number = 22
console.log(`Halo, saya ${nama1}, umur ${umur1} tahun`)

// 16.Tampilkan tanggal hari ini dalam format: YYYY-MM-DD.
let tanggal = new Date()
console.log(`${tanggal.getFullYear()}-${tanggal.getMonth()}-${tanggal.getDate()}`)

// 17.Ubah string "1234" menjadi number dan tampilkan typeof-nya.
const num: string = "1234"
console.log(Number(num))

// 18.Ubah nilai 0, 1, "", "abc" menjadi boolean menggunakan Boolean().
const nilai1: number = 0
const nilai2: number = 1
const nilai3: string = ""
const nilai4: string = "abc"

console.log(`${Boolean(nilai1)} ${Boolean(nilai2)} ${Boolean(nilai3)} ${Boolean(nilai4)}`)

// 19.Buat variabel angka = 10, lalu gunakan +=, -=, *=, /= dan tampilkan hasilnya.
let angka4: number = 10
console.log(angka4 += 2)
console.log(angka4 -= 2)
console.log(angka4 *= 2)
console.log(angka4 /= 2)

// 20.Tampilkan hasil: 2 + 3, 10 % 3, 2 ** 4.

console.log(2 + 3, 10 % 3, 2 ** 4)

// 21.Buat variabel counter = 0 lalu counter++, cetak hasil sebelum dan sesudah.
let counter: number = 0
console.log(counter++)
console.log(counter)

// 22.Tampilkan perbedaan a++ dan ++a dalam logika cetak.
let a: number = 1
console.log(a++)
console.log(++a)

// 23.Buat perbandingan dengan == dan ===, contoh: 5 == "5" dan 5 === "5"
// console.log(5 == "5")
// console.log(5 === "5")

// 24.Buat fungsi isAdult(age) yang mengembalikan true jika age >= 18.
function isAdult(age: number) {
    if (age >= 18) {
        return true
    }
}

console.log(isAdult(20))

// 25.Buat fungsi isEven(number) yang mengembalikan true jika genap, false jika ganjil.
function isEven(num: number) {
    if (num % 2 === 0) {
        return "genap"
    } else {
        return "ganjil"
    }
}

console.log(isEven(0))

