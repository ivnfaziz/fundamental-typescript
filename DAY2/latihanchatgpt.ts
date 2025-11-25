// 1.	Buat program yang menampilkan “Kamu lulus” jika nilai lebih dari 75.
const nilai: number = 76;

if (nilai > 75 || nilai <= 100) {
  console.log("Kamu Lulus");
} else if (nilai > 100) {
  console.log("Nilai kamu tidak valid");
} else {
  console.log("Kamu tidak lulus");
}

// 2.	Buat program yang mengecek apakah umur >= 17, lalu tampilkan "Boleh membuat KTP", jika tidak "Belum boleh membuat KTP".
const umur: number = 100;

if (umur >= 17) {
  console.log("Boleh membuat KTP");
} else if (umur < 17) {
  console.log("Belum boleh membuat KTP");
}

// 3.	Buat program yang mengecek apakah suatu string kosong atau tidak, lalu tampilkan “Input tidak boleh kosong”.
const input: string = " ";

if (!input || input === " ") {
  console.log("Input tidak boleh kosong");
} else {
  console.log("Input Anda Valid");
}

/*
    4.	Buat program yang menerima nilai grade dan tampilkan:
        o	A → “Sangat Baik”
        o	B → “Baik”
        o	C → “Cukup”
        o	Lainnya → “Perlu perbaikan”
*/

const grade: string = "D";

switch (grade) {
  case "A":
    console.log("Sangat Baik");
    break;
  case "B":
    console.log("Baik");
    break;
  case "C":
    console.log("Cukup");
    break;
  default:
    console.log("Perlu perbaikan");
    break;
}

// 5.	Buat program menggunakan switch yang menerima nama hari ("senin", "selasa", dst.) dan menampilkan jadwal kegiatan sesuai hari.
const hari: string = "rabu";

switch (hari) {
  case "senin":
    console.log("Mengulik coding");
    break;
  case "selasa":
    console.log("Menjadi Jagoan Neon");
    break;
  case "rabu":
    console.log("Makan");
    break;
  case "kamis":
    console.log("Ketemu ayang");
    break;
  case "jumat":
    console.log("Belajar Lagi");
    break;
  case "sabtu":
    console.log("wiritan");
    break;
  case "minggu":
    console.log("nggolek wangsit");
    break;
}

// 6.	Buat program yang memeriksa apakah tahun adalah kelipatan 4 dan tampilkan “Tahun kabisat” jika iya.

const tahun = 2020;

if (tahun % 4 === 0) {
  console.log("Tahun kabisat");
}

// 7.	Buat program yang mengecek apakah angka positif, negatif, atau nol.
const angka: number = 0;

if (angka < 0) {
  console.log("Ini angka negatif");
} else if (angka > 0) {
  console.log("Ini angka positif");
} else if (angka === 0) {
  console.log("Ini angka 0");
} else {
  console.log("Invalid Input");
}

// 8.	Buat program yang memeriksa apakah dua variabel username dan password sesuai dengan yang ditentukan,
// jika iya tampilkan “Login berhasil”, jika tidak “Login gagal”.
const datauser: string = "Jvauif";
const pwuser: string = "@Admin123";

function Login(inpuser: string, inppw: string) {
  if (inpuser === datauser && inppw === pwuser) {
    return "Login Berhasil";
  } else {
    return "Login gagal";
  }
}

console.log(Login("Jvauif", "@Admin123"));

// 9.	Buat program yang mengecek apakah seseorang anak, remaja, atau dewasa berdasarkan umur.
const cekumur: number = 0;

if (cekumur <= 12) {
  console.log("anak");
} else if (cekumur <= 17) {
  console.log("remaja");
} else {
  console.log("dewasa");
}

// 10.	Buat program yang mengecek apakah angka habis dibagi 3 dan 5 sekaligus, jika iya tampilkan “FizzBuzz”.

const angkacek: number = 7;
if (angkacek % 3 === 0 || angkacek % 5 === 0) {
  console.log("FizzBuzz");
} else {
  console.log("Invalid");
}

// 11.	Buat program yang mengecek apakah seseorang boleh mengendarai motor, dengan syarat umur >= 17 dan punya SIM.
const seseorang: number = 17;
const punyaSim: boolean = true;

if (seseorang >= 17 && punyaSim) {
  console.log("Boleh mengendarai");
} else {
  console.log("Tidak boleh mengendara");
}

// 12.	Buat program yang mengecek apakah seseorang boleh masuk bioskop untuk film 18+,
// jika umur >= 18 ataudidampingi orang tua.

const umurbioskop: number = 18;
const orangtua: boolean = false;

if (umurbioskop >= 18 || orangtua) {
  console.log("boleh masuk");
} else {
  console.log("Tidak boleh masuk");
}

// 13.	Buat program yang menolak akses jika status login adalah false.
const statuslogin: boolean = false;
if (statuslogin) {
  console.log("Anda dapat akses");
} else {
  console.log("Login dahulu");
}

// 14.	Buat program yang mengecek apakah input username tidak kosong (!username).
const username: string = "Ivan";

if (!username) {
  console.log("Username kosong");
} else {
  console.log("Username Anda Valid");
}

// 15.	Buat kondisi di mana seseorang tidak boleh mendaftar jika umur kurang dari 18 atau tidak punya KTP.
const mendaftarKTP: number = 18;
const punyaKTP: boolean = true;

if (mendaftarKTP >= 18 || punyaKTP) {
  console.log("Boleh mendaftar KTP");
} else {
  console.log("Tidak boleh mendaftar KTP");
}

// 16.	Buat program yang menerima input nama dan tampilkan “Selamat datang, [nama]” hanya jika nama tidak kosong.
const nama: string = "Ivan";

if (!nama) {
  console.log("Tolong inputkan nama");
} else {
  console.log(`Selamat datang ${nama}`);
}

// 17.	Buat pengecekan menggunakan if (nilai) untuk menampilkan apakah nilai tersebut truthy atau falsy.
const nilai1: any = 0;

if (nilai1) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// 18.	Uji nilai berikut dan tampilkan hasilnya: "", "0", 0, null, undefined, {}, [].

const nilai2: any = [];

if (nilai2) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// 19.	Buat fungsi isTruthy(value) yang menerima parameter dan mengembalikan true jika nilainya truthy.

function isTruthy(value: any) {
  if (value) {
    return "truthy";
  } else {
    return "falsy";
  }
}

console.log(isTruthy(""));

// 20.	Buat program yang menampilkan pesan “Nilai tidak valid” jika input adalah NaN.

const input1: any = undefined;

if (Number.isNaN(Number(input1))) {
  console.log("Nilai tidak valid");
} else {
  console.log("Nilai valid");
}

// 21.	Buat program yang menggunakan ternary operator untuk menampilkan “Selamat pagi” jika jam < 12, jika tidak “Selamat siang”.

const jam: number = 24;

console.log(jam < 12 ? "selamat pagi" : "selamat siang");

// 22.	Gunakan ternary operator untuk mengecek apakah nilai >= 75 → "Lulus" : "Tidak lulus".
const nilailulus: number = 70;

console.log(nilailulus >= 75 ? "Lulus" : "Tidak lulus");

// 23.	Buat program yang menampilkan apakah suhu > 30 → “Panas” : suhu < 20 → “Dingin” : “Normal” (nested ternary).

const suhu: number = 20;
console.log(suhu > 30 ? "Panas" : suhu < 20 ? "Dingin" : "Normal");

// 24.	Buat program ternary untuk mengecek apakah kata input === "typescript" → "Yes, TS!" : "Nope!".
const input2: string = "typescript";

console.log(input2 === "typescript" ? "Yes, TS!" : "Nope!");

// 25.	Buat ternary operator yang memeriksa apakah user online (true/false) lalu tampilkan “Online” atau “Offline”.
const online: boolean = true;

console.log(online ? "Online" : "Offline");

// 26.	Buat program for loop yang mencetak angka dari 1 sampai 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 27.	Buat for loop yang mencetak semua angka genap dari 1 sampai 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 28.	Buat while loop untuk mencetak angka dari 5 sampai 1 (mundur).
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

let jika: number = 5;

while (jika >= 1) {
  console.log(jika);
  jika--;
}

// 29.	Buat do while loop yang mencetak “Belajar JavaScript” sebanyak 3 kali.
let cetak: number = 0;

do {
  console.log("Belajar Javascript");
  cetak++;
} while (cetak < 3);

// 30.	Buat while (true) loop yang berhenti jika variabel count sudah bernilai lebih dari 5, gunakan break.
let count: number = 0;

while (true) {
  console.log(count);
  if (count >= 5) {
    break;
  }
  count++;
}
