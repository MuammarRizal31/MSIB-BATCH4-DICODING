const STORAGE_KEY = "BOOKSHELF_APPS";
const books = [];
const RENDER_EVENT = "RENDER-TODO";

// MEMBUAT FUNGSI FUNGSI YANG AKAN DIPAKAI

// fungsi ini untuk mengembalikan id yang unik
function menghasilkanID() {
  return +new Date();
}

// fungsi ini untuk mengembalikan objek yang akan kita gunakan pada apps todo
function menghasilkanBuku(id, title, author, year, selesai) {
  return {
    id,
    title,
    author,
    year,
    selesai,
  };
}

function bbook(objekTodo) {
  const { id, title, author, year, selesai } = objekTodo;
  const title1 = document.createElement("h3");
  title1.innerText = title;

  const penulis1 = document.createElement("p");
  penulis1.innerText = author;

  const tahun1 = document.createElement("p");
  tahun1.innerText = year;

  const article = document.createElement("article");
  article.classList.add("book_item");
  article.setAttribute("id", `id-buku-${id}`);
  article.append(title1, penulis1, tahun1);

  const action = document.createElement("div");
  action.classList.add("action");
  article.append(action);

  if (selesai) {
    const btnSelesai = document.createElement("button");
    btnSelesai.innerText = "Belum Selesai dibaca";
    btnSelesai.classList.add("green");

    btnSelesai.addEventListener("click", function () {
      selesaiDibaca(id);
    });

    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus Buku";
    btnHapus.classList.add("red");

    btnHapus.addEventListener("click", function () {
      hapusBuku(id);
    });

    action.append(btnSelesai, btnHapus);
  } else {
    const btnBelum = document.createElement("button");
    btnBelum.innerText = "Selesai dibaca";
    btnBelum.classList.add("green");

    btnBelum.addEventListener("click", function () {
      mengembalikanPembacaanBuku(id);
    });

    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus Buku";
    btnHapus.classList.add("red");

    btnHapus.addEventListener("click", function () {
      hapusBuku(id);
    });

    action.append(btnBelum, btnHapus);
  }

  article.append(action);
  return article;
}

function hapusBuku(bookId) {
  const bookTarget = mencariIndexBuku(bookId);
  if (bookTarget === -1) return;
  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function mencariIndexBuku(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }
  return -1;
}

function selesaiDibaca(objekId) {
  const bookTarget = mencariBuku(objekId);
  if (bookTarget === null) return null;
  bookTarget.selesai = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function mengembalikanPembacaanBuku(objekId) {
  const bookTarget = mencariBuku(objekId);
  if (bookTarget == null) return;
  bookTarget.selesai = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

function mencariBuku(bookId) {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

function checkStatus() {
  const isCheckComplete = document.getElementById("inputBookIsComplete");
  if (isCheckComplete.checked) {
    return true;
  }
  return false;
}

function searchBooks() {
  const inputSearchValue = document.getElementById("searchBookTitle").value.toLowerCase();
  const incompleteBookShelf = document.getElementById("incompleteBookshelfList");
  const completeBookShelf = document.getElementById("completeBookshelfList");
  incompleteBookShelf.innerHTML = "";
  completeBookShelf.innerHTML = "";

  if (inputSearchValue == "") {
    document.dispatchEvent(new Event(RENDER_EVENT));
    return;
  }

  for (const book of books) {
    if (book.title.toLowerCase().includes(inputSearchValue)) {
      if (book.selesai == false) {
        let el = `
           <article class="book_item">
              <h3>${book.title}</h3>
              <p>${book.author}</p>
              <p>${book.year}</p>

              <div class="action">
                 <button class="green" onclick="changeBookStatus(${book.id})">Selesai dibaca</button>
                 <button class="red" onclick="removeBook(${book.id})">Hapus Buku</button>
                 </div>
           </article>
           `;

        incompleteBookShelf.innerHTML += el;
      } else {
        let el = `
           <article class="book_item">
              <h3>${book.title}</h3>
              <p>${book.author}</p>
              <p>${book.year}</p>

              <div class="action">
                 <button class="green" onclick="changeBookStatus(${book.id})">Belum Selesai dibaca</button>
                 <button class="red" onclick="removeBook(${book.id})">Hapus Buku</button>
                 </div>
           </article>
           `;

        completeBookShelf.innerHTML += el;
      }
    }
  }
}
const input = document.getElementById("searchBookTitle");
const cari = document.getElementById("searchSubmit");
input.addEventListener("keyup", (e) => {
  e.preventDefault();
  searchBooks();
});

cari.addEventListener("submit", function (e) {
  e.preventDefault();
  searchBooks();
});

function membuatBuku() {
  const isiTitleBuku = document.getElementById("inputBookTitle").value;
  const isiPenulisBuku = document.getElementById("inputBookAuthor").value;
  const isiTahunBuku = document.getElementById("inputBookYear").value;
  const checkComplete = checkStatus();

  const menghasilkanId = menghasilkanID();
  const bookObjek = menghasilkanBuku(menghasilkanId, isiTitleBuku, isiPenulisBuku, isiTahunBuku, checkComplete);
  books.push(bookObjek);
  document.dispatchEvent(new Event(RENDER_EVENT));
  simpanData();
}

/**
 * Fungsi ini untuk menyimpan data ke local storage
 * sesuai dengan key yang sudah ditetapkan sebelumnya
 */
function simpanData() {
  if (lihatLocalStorage()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
}

/**
 * fungsi ini untuk memuat data dari local storage
 */
function memuatDataStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function lihatLocalStorage() {
  if (typeof Storage === "undefined") {
    alert("Maaf browser anda tidak mendukung local storage");
    return false;
  }
  return true;
}

document.addEventListener(RENDER_EVENT, function () {
  const incompleteBookshelfList = document.getElementById("incompleteBookshelfList");
  const completeBookshelfList = document.getElementById("completeBookshelfList");

  completeBookshelfList.innerHTML = "";
  incompleteBookshelfList.innerHTML = "";

  for (const bookItem of books) {
    const elementBuku = bbook(bookItem);

    if (bookItem.selesai) {
      completeBookshelfList.append(elementBuku);
    } else {
      incompleteBookshelfList.append(elementBuku);
    }
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inputBook");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    membuatBuku();
  });

  if (lihatLocalStorage()) {
    memuatDataStorage();
  }
});
