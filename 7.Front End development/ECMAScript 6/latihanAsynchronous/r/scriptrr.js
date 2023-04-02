const kopi = {
  kopiSelesai: true,
  macamKopi: {
    kopiItem: 6,
    kopiLuwak: 10,
    kopiLiong: 10,
  },
};

function membuatKopi(e, a) {
  return new Promise((resolve, reject) => {
    if (kopi.macamKopi[e] <= a) {
      resolve("Biji kopi tersedia");
    } else {
      console.log("Kopi tidak tersedia");
      reject("kopi tidak tersedia");
    }
  });
}

function merebusAir(e) {
  return new Promise((r, t) => {
    if (kopi.kopiSelesai) {
      r("berhasil dibuat");
    } else {
      t("mesin ngaco");
    }
  });
}

function antar() {
  return new Promise((resolve) => {
    resolve("selesai dibuat");
  });
}

function jalan(tipe, mili) {
  return membuatKopi(tipe, mili)
    .then(merebusAir)
    .then(antar)
    .then((r) => console.log(r));
}

jalan("kopiItem", 90);
