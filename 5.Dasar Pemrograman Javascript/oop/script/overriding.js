// class MailServices {
//   constructor(pengirim) {
//     this.sender = pengirim;
//   }
// }

// class whatsappService extends MailServices {
//   constructor(sender, bisnis) {
//     super(sender);

//     this.isBusiness = bisnis;
//   }
// }

// const wa = new whatsappService("muammar", "akun bisnis");
// console.log(wa.isBusiness);

// class Pesan {
//   constructor(pengirim) {
//     this.sender = pengirim;
//   }

//   kirimPesan(pesan, penerima) {
//     console.log(`Hallo ${penerima} anda mendapatkan pesan dari ${this.sender} yang berisi ${pesan}`);
//   }
// }

// class WhatsApp extends Pesan {
//   constructor(sender, business) {
//     super(sender);

//     this.akunBisnis = business;
//   }

//   kirimPesan(pesan, penerima) {
//     console.log(`Hallo ${penerima} anda mendapatkan pesan dari ${this.sender} yang berisi ${pesan} melalui via whatsapp`);
//   }
// }

// const wa = new WhatsApp("Rizal", true);
// wa.kirimPesan(`jangan lupa minum air putih`, "jange");

// const parent = new Pesan("muammar");
// parent.kirimPesan("ngopi kurangin", "rizal");

class Pesan {
  constructor(pengirim) {
    this.sender = pengirim;
  }

  kirimPesan(pesan, penerima) {
    console.log("Hallo ", penerima, " anda mendapatkan pesan dari ", this.sender, " Yang berisi ", pesan);
  }
}

class PesanWhatsapps extends Pesan {
  constructor(pengirim, bisnis) {
    super(pengirim);
    this.bisnis = bisnis;
  }

  kirimPesan(penerima, pesan) {
    super.kirimPesan(pesan, penerima);
    console.log("via whatsapp");
  }
}

const wa = new PesanWhatsapps("sandika", true);
wa.kirimPesan("rizal", "Selamat anda kena prek");
