// class EmailServices {
//   constructor(pengirim) {
//     this.sender = pengirim;
//   }

//   kirimPesan(pesan, penerima) {
//     console.log(`${this.sender} mengirim pesan ke ${penerima} :
//         yang berisi ${pesan}
//         `);
//   }

//   kirimPesanDelay(pesan, penerima, waktu) {
//     waktu *= 1000;
//     setTimeout(() => {
//       console.log(`hei ${penerima} anda menerima pesan dari ${this.sender} yang berisi ${pesan}`);
//     }, waktu);
//   }

//   kirimPesanBanyk(pesan, orangorang) {
//     for (const orang of orangorang) {
//       this.kirimPesan(pesan, orang);
//     }
//   }
// }

// const emailRizal = new EmailServices("Muammar");

// emailRizal.kirimPesan("hallo selamat malam", "fikri priambodo");
// emailRizal.kirimPesanDelay("yo broh,gua rindu sama lu", "Tania Julia Putri", 3);
// emailRizal.kirimPesanBanyk("halo semua", ["rizal", "jange", "topet"]);

// CONTOH MENGGUNAKAN INHERITANCE
//super class
class MainService {
  constructor(pengirim) {
    this.sender = pengirim;
  }

  kirimPesan(penerima, pesan) {
    console.log(`Hallo ${penerima} anda mendapatkan pesan dari ${this.sender} yang berisi ${pesan}`);
  }
}

//subclass
class whatsappService extends MainService {
  pesanSiaran(orangorang, pesan) {
    for (let orang of orangorang) {
      this.kirimPesan(orang, "yo broh");
    }
  }
}

class emailService extends MainService {
  pesanDelay(pesan, penerima, waktu) {
    waktu *= 1000;
    setTimeout(() => {
      this.kirimPesan(`hallo ${penerima} anda mendapatkan pesan dari ${this.penerima} yang berisi ${pesan}`);
    }, waktu);
  }
}

const wa = new whatsappService("jange");
wa.pesanSiaran(["jange", "jangs", "topet"], "anda harus rajin");
