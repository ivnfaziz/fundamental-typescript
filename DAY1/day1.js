console.log("Hello World");

// Ini adalah comment 1
// Ini adalah comment 1

/* 
ini adalah comment
ini bisa multi laine
*/

// ==================================== VARIABEL (STORAGE / PENAMPUNG DATA)
// var, let, const, kalo di javascript jangan pakai var, pastikan kalo bikin variabel pakai let dan const

var orang = "Budi";
console.log(orang);
// artinya code diatas adalah storage atau penampungan data orang ini isinya adalah budi

// kalo kita menggunakan var itu juga nama variabel nya sama itu tetep bisa
// jadi var itu bisa double nama itu bisa dan itu bikin membingungkan, jadi jarang dipakai

var orang;
let orang2;
// let orang2 (ini akan error karena let itu tidak bisa sama nama variabelnya)

// let itu bisa mengganti isi variabel nya
//contoh :
let person = "Joko";
person = "Andi";
console.log(person);

// kalo const itu isi variabel tidak bisa di ganti atau constanta
const pero = "Jack";
// pero = "budi"
console.log(pero);

// ====================================== VARIABEL NAMING
/* 
    - HANYA BOLEH BERISIKAN "HURUF", "DIGIT ATAU ANGKA" ATAU PUN "SIMBOL : DOLAR "$" ATAUPUN UNDERSCORE "_""
    - KARAKTER PERTAMA TIDAK BOLEH DIGIT ATAU ANGKA
    - CASE - SENSITIF (huruf kecil dan huruf besar itu berbeda)
    - TIDAK BOLEH MENAMAI VARIABEL YANG ADA DI JAVASCRIPT CONTOH CONST, VAR, DELETE, FOR, ETC
*/

// ======================================== DATA TYPES
/* 
    - PRIMITIVE DATA TYPES (STRING, NUMBER, BOOLEAN, NULL, DAN UNDEFINED)
    - NON PRIMITIVE (OBJECT DAN ARRAY)
    - STRING = "" ''
    - NUMBER = 1 2 3 (TIDAK DI BALUT DENGAN PETIK)
    - BOOLEAN = "TRUE" DAN "FALSE"
    - NULL = MENANDAKAN SEBUAH VALUE ITU MASIH KOSONG DAN BELUM TERISI (ITU KAYAK KITA NGASIH TAU JAVASCRIPT INI VALUENYA MASIH KOGONG LOG INI BAKAL AKU ISI)
    - UNDEFINED = JAVASCRIPT NYA GAK TAU ISINYA APA
*/

// string
console.log("INI STRING");
// number
console.log(123);
// boolean
console.log(true);
console.log(false);
// null
let orang = null;
// undefined - js tidak tau isinya
let orang = undefined;
