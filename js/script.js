document.addEventListener("DOMContentLoaded", function () {
  // Semua kode JavaScript dimasukkan di dalam fungsi ini
  const beratInput = document.getElementById("beratBadan");
  const tinggiInput = document.getElementById("tinggiBadan");
  const usiaInput = document.getElementById("usiaUmur");
  const hasilDiv = document.getElementById("result-calculation");
  const infoResult = document.getElementById("info-result"); // Ambil elemen info-result
  const hitungBtn = document.querySelector(".green-button");
  const resetBtn = document.querySelector(".red-button");

  // Fungsi untuk menghitung BMI
  function hitungBMI(event) {
    event.preventDefault();
    const berat = parseFloat(beratInput.value);
    const tinggi = parseFloat(tinggiInput.value) / 100;
    const usia = parseInt(usiaInput.value);

    if (
      isNaN(berat) ||
      isNaN(tinggi) ||
      isNaN(usia) ||
      berat <= 0 ||
      tinggi <= 0 ||
      usia <= 0
    ) {
      alert("Silakan masukkan angka yang valid!");
      return;
    }

    if (usia < 18) {
      alert("Kalkulator ini hanya untuk orang dewasa!");
      return;
    }

    const bmi = (berat / (tinggi * tinggi)).toFixed(2);

    let kategori = "";
    let saran = "";
    if (bmi < 18.5) {
      kategori = "Kurus";
      saran = "untuk meningkatkan berat badan.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal";
      saran = "untuk mempertahankan berat badan.";
    } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Berat Badan Berlebih";
      saran = "untuk menurunkan berat badan.";
    } else {
      kategori = "Obesitas";
      saran = "untuk menurunkan berat badan dengan bantuan profesional.";
    }

    hasilDiv.innerHTML = `
      <p><strong>${bmi}</strong>.</p>
      <p>Anda berada dalam kategori <strong> ${kategori} </strong>.</p>
    `;

    // Update isi info-result dengan saran
    infoResult.innerHTML = `Disarankan ${saran}`;

    hasilDiv.style.display = "block";
  }

  function resetForm() {
    beratInput.value = "";
    tinggiInput.value = "";
    usiaInput.value = "";
    hasilDiv.style.display = "none";
    infoResult.innerHTML = "Anda memiliki berat badan"; // Reset info-result
  }

  hitungBtn.addEventListener("click", hitungBMI);
  resetBtn.addEventListener("click", resetForm);
});
