// Auto fill "Hi Name"
document.addEventListener("DOMContentLoaded", () => {
  let userName = prompt("Masukkan nama kamu:");
  if (userName) {
    document.getElementById("userName").innerText = userName;
  }

  // Current time
  const now = new Date();
  document.getElementById("currentTime").innerText = now;

  // Form Validation & Output
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const pesan = document.getElementById("pesan").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Show output
    document.getElementById("outNama").innerText = nama;
    document.getElementById("outTanggal").innerText = tanggal;
    document.getElementById("outGender").innerText = gender;
    document.getElementById("outPesan").innerText = pesan;
  });
});
