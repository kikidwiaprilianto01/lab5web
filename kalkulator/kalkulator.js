function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function prosesNilai() {
  const nilaiInput = [
    document.getElementById("inputTugas").value,
    document.getElementById("inputUts").value,
    document.getElementById("inputUas").value,
  ];
  const hasilAkhir = document.getElementById("hasilAkhir");
  const hasilPredikat = document.getElementById("hasilPredikat");
  const hasilStatus = document.getElementById("hasilStatus");

  if (nilaiInput.some((nilai) => nilai.trim() === "")) {
    hasilAkhir.textContent = "";
    hasilPredikat.textContent = "";
    hasilStatus.textContent = "Harap isi nilai tugas, UTS, dan UAS.";
    return;
  }

  const [tugas, uts, uas] = nilaiInput.map(Number);
  const semuaNilai = [tugas, uts, uas];
  if (semuaNilai.some((nilai) => !Number.isFinite(nilai) || nilai < 0 || nilai > 100)) {
    hasilAkhir.textContent = "";
    hasilPredikat.textContent = "";
    hasilStatus.textContent = "Nilai harus berupa angka antara 0 dan 100.";
    return;
  }

  const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
  hasilAkhir.textContent = `Nilai akhir: ${nilaiAkhir.toFixed(2).replace(".", ",")}`;
  hasilPredikat.textContent = `Predikat: ${tentukanPredikat(nilaiAkhir)}`;
  hasilStatus.textContent = `Status: ${nilaiAkhir >= 60 ? "Lulus" : "Belum lulus"}`;
}