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
