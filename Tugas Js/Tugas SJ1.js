var angka = 1;

// While loop
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Do while loop
do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 5);

// switch case
var hari = "Selasa";

switch (hari) {
  case "Senin":
    console.log("Hari Senin");
    break;
  case "Selasa":
    console.log("Hari Selasa");
    break;
  case "Rabu":
    console.log("Hari Rabu");
    break;
  case "kamis":
    console.log("Hari Kamis");
    break;
  case "Jumat":
    console.log("Hari Jumat");
    break;
  default:
    console.log("Hari tidak dikenali");
}

// if, else, nested if
var nilai = 75;

if (nilai >= 80) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}

// Nested if
var cuaca = "cerah";
var suhu = 30;

if (cuaca === "cerah") {
  if (suhu > 25) {
    console.log("Cuaca cerah dan panas.");
  } else {
    console.log("Cuaca cerah tetapi sejuk.");
  }
} else {
  console.log("Cuaca tidak cerah.");
}

//for statemnt
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}
