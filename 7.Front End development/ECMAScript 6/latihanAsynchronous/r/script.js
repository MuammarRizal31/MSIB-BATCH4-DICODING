// // document.addEventListener("DOMContentLoaded", function () {
// //   const xhr = new XMLHttpRequest();
// //   const url = "http://www.omdbapi.com/?apikey=41d03a10&s=avengers";
// //   xhr.onreadystatechange = function () {
// //     if (this.readyState == 4 && this.status == 200) {
// //       const ambil = JSON.parse(this.response);
// //       const el = document.querySelector(".el");
// //       const loop = ambil.Search;
// //       loop.forEach((e) => {
// //         el.innerHTML += `<div class="col-md-4 mt-3">
// //         <div class="card">
// //           <img src="${e.Poster}" class="card-img-top" alt="..." />
// //           <div class="card-body">
// //             <h5 class="card-title">${e.Title}</h5>
// //             <h5 class="text-muted">${e.Year}</h5>
// //             <a href="#" class="btn btn-primary nge" data-bs-toggle="modal" data-bs-target="#klik" data-imdb="${e.imdbID}">Lihat Selengkapnya</a>
// //           </div>
// //         </div>
// //       </div>`;
// //       });
// //       const nge = document.querySelectorAll(".nge");
// //       nge.forEach((a) => {
// //         a.addEventListener("click", function () {
// //           const a = new XMLHttpRequest();
// //           const imdbId = this.getAttribute("data-imdb");
// //           const ajax = "http://www.omdbapi.com/?apikey=41d03a10&i=" + imdbId;

// //           a.onreadystatechange = function () {
// //             if (this.readyState == 4 && this.status == 200) {
// //               const r = JSON.parse(this.response);
// //               // tt1626038
// //               const ja = document.querySelector(".ja");

// //               ja.innerHTML = `<div class="col-md-3 text-center">
// //                     <img src="${r.Poster}" class="img-fluid mt-3" />
// //                   </div>
// //                   <div class="col-md">
// //                     <div class="modal-body">
// //                       <ul class="list-group">
// //                         <li class="list-group-item"><h4>${r.Title}</h4></li>
// //                         <li class="list-group-item"><strong>Director : </strong>${r.Director}</li>
// //                         <li class="list-group-item"><strong>actors :</strong> ${r.Actors}</li>
// //                         <li class="list-group-item"><strong>Writer : </strong> ${r.Writer}</li>
// //                         <li class="list-group-item"><strong>Runtime : </strong> ${r.Runtime}</li>
// //                         <li class="list-group-item"><strong>Language : </strong> ${r.Language}</li>
// //                         <li class="list-group-item"><strong>Country : </strong>${r.Country}</li>
// //                         <li class="list-group-item"><strong>Genre : </strong>${r.Genre}</li>
// //                         <li class="list-group-item"><strong>Rated : </strong>${r.Rated}</li>
// //                       </ul>
// //                     </div>
// //                   </div>`;
// //             }
// //           };
// //           a.open("GET", ajax, true);
// //           a.send();
// //         });
// //       });
// //     }
// //   };
// //   xhr.open("GET", url, true);
// //   xhr.send();
// // });

// function showMovies(e) {
//   return `<div class="col-md-4 mt-3">
//             <div class="card">
//               <img src="${e.Poster}" class="card-img-top" alt="..." />
//               <div class="card-body">
//                 <h5 class="card-title">${e.Title}</h5>
//                 <h5 class="text-muted">${e.Year}</h5>
//                 <a href="#" class="btn btn-primary nge" data-bs-toggle="modal" data-bs-target="#klik" data-imdb="${e.imdbID}">Lihat Selengkapnya</a>
//               </div>
//             </div>
//           </div>`;
// }

// function showDetailMovies(r) {
//   return `<div class="col-md-3 text-center">
//             <img src="${r.Poster}" class="img-fluid mt-3" />
//           </div>
//         <div class="col-md">
//             <div class="modal-body">
//                 <ul class="list-group">
//                     <li class="list-group-item"><h4>${r.Title}</h4></li>
//                     <li class="list-group-item"><strong>Director : </strong>${r.Director}</li>
//                     <li class="list-group-item"><strong>actors :</strong> ${r.Actors}</li>
//                     <li class="list-group-item"><strong>Writer : </strong> ${r.Writer}</li>
//                     <li class="list-group-item"><strong>Runtime : </strong> ${r.Runtime}</li>
//                     <li class="list-group-item"><strong>Language : </strong> ${r.Language}</li>
//                     <li class="list-group-item"><strong>Country : </strong>${r.Country}</li>
//                     <li class="list-group-item"><strong>Genre : </strong>${r.Genre}</li>
//                     <li class="list-group-item"><strong>Rated : </strong>${r.Rated}</li>
//                     </ul>
//                     </div>
//                     </div>`;
// }

// function fetchh(f) {
//   return fetch("http://www.omdbapi.com/?apikey=41d03a10&s=" + f)
//     .then((resolve) => resolve.json())
//     .then((resolve) => resolve);
// }
// document.addEventListener("DOMContentLoaded", function () {
//   const btnSearch = document.querySelector(".a");
//   btnSearch.addEventListener("click", async function () {
//     const inputValue = document.querySelector(".b").value;
//     const data = await fetchh(inputValue);
//     loop(data.Search);
//   });
// });

// document.addEventListener("click", async function (e) {
//   if (e.target.classList.contains("nge")) {
//     const jj = e.target.dataset.imdb;
//     const data = await showDetail(jj);
//     const ja = document.querySelector(".ja");
//     ja.innerHTML = showDetailMovies(data);
//   }
// });
// function showDetail(e) {
//   return fetch("http://www.omdbapi.com/?apikey=41d03a10&i=" + e)
//     .then((resolve) => resolve.json())
//     .then((resolve) => resolve);
// }

// function loop(e) {
//   const el = document.querySelector(".el");
//   let a = "";
//   e.forEach((d) => {
//     a += showMovies(d);
//   });
//   el.innerHTML = a;
// }

// // document.addEventListener("DOMContentLoaded", function () {
// //   const btnSearch = document.querySelector(".a");
// //   btnSearch.addEventListener("click", function () {
// //     const a = document.querySelector(".b").value;
// //     let card = "";
// //     fetch("http://www.omdbapi.com/?apikey=41d03a10&s=" + a)
// //       .then((response) => response.json())
// //       .then((result) => {
// //         const resultt = result.Search;
// //         card = "";
// //         resultt.forEach((e) => {
// //           card += showMovies(e);
// //         });
// //         const el = document.querySelector(".el");
// //         el.innerHTML += card;
// //         const nge = document.querySelectorAll(".nge");
// //         nge.forEach((e) => {
// //           e.addEventListener("click", function () {
// //             fetch("http://www.omdbapi.com/?apikey=41d03a10&i=" + this.dataset.imdb)
// //               .then((response) => response.json())
// //               .then((result) => {
// //                 let moviesDetail = "";
// //                 moviesDetail = showDetailMovies(result);
// //                 let ja = document.querySelector(".ja");
// //                 ja.innerHTML = moviesDetail;
// //               });
// //           });
// //         });
// //       })
// //       .catch((e) => {
// //         console.log(e);
// //       });
// //   });
// // });

// membuat function
function showDetailMovies(r) {
  return `<div class="col-md-3 text-center">
              <img src="${r.Poster}" class="img-fluid mt-3" />
            </div>
          <div class="col-md">
              <div class="modal-body">
                  <ul class="list-group">
                      <li class="list-group-item"><h4>${r.Title}</h4></li>
                      <li class="list-group-item"><strong>Director : </strong>${r.Director}</li>
                      <li class="list-group-item"><strong>actors :</strong> ${r.Actors}</li>
                      <li class="list-group-item"><strong>Writer : </strong> ${r.Writer}</li>
                      <li class="list-group-item"><strong>Runtime : </strong> ${r.Runtime}</li>
                      <li class="list-group-item"><strong>Language : </strong> ${r.Language}</li>
                      <li class="list-group-item"><strong>Country : </strong>${r.Country}</li>
                      <li class="list-group-item"><strong>Genre : </strong>${r.Genre}</li>
                      <li class="list-group-item"><strong>Rated : </strong>${r.Rated}</li>
                      </ul>
                      </div>
                      </div>`;
}

function showMovies(e) {
  return `<div class="col-md-4 mt-3">
            <div class="card">
              <img src="${e.Poster}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${e.Title}</h5>
                <h5 class="text-muted">${e.Year}</h5>
                <a href="#" class="btn btn-primary nge" data-bs-toggle="modal" data-bs-target="#klik" data-imdb="${e.imdbID}">Lihat Selengkapnya</a>
              </div>
            </div>
          </div>`;
}

function apiMovie(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=41d03a10&s=" + keyword)
    .then((resolve) => {
      if (!resolve.ok) {
        throw new Error(resolve.status);
      }
      return resolve.json();
    })
    .then((resolve) => {
      if (resolve.Response === "False") {
        throw new Error(resolve.Error);
      }
      return resolve.Search;
    });
}

function movieLoop(e) {
  let card = "";
  const tampilkanMovie = document.querySelector(".el");
  e.forEach((a) => {
    card += showMovies(a);
  });
  tampilkanMovie.innerHTML += card;
}

function getMoviesDetail(e) {
  return fetch("http://www.omdbapi.com/?apikey=41d03a10&i=" + e)
    .then((resolve) => resolve.json())
    .then((resolve) => resolve)
    .catch((err) => console.log(err));
}

function showMoviesDetail(r) {
  return `<div class="col-md-3 text-center">
  <img src="${r.Poster}" class="img-fluid mt-3" />
</div>
<div class="col-md">
  <div class="modal-body">
      <ul class="list-group">
          <li class="list-group-item"><h4>${r.Title}</h4></li>
          <li class="list-group-item"><strong>Director : </strong>${r.Director}</li>
          <li class="list-group-item"><strong>actors :</strong> ${r.Actors}</li>
          <li class="list-group-item"><strong>Writer : </strong> ${r.Writer}</li>
          <li class="list-group-item"><strong>Runtime : </strong> ${r.Runtime}</li>
          <li class="list-group-item"><strong>Language : </strong> ${r.Language}</li>
          <li class="list-group-item"><strong>Country : </strong>${r.Country}</li>
          <li class="list-group-item"><strong>Genre : </strong>${r.Genre}</li>
          <li class="list-group-item"><strong>Rated : </strong>${r.Rated}</li>
          </ul>
          </div>
          </div>`;
}

// cari pencarian film
const searchMovies = document.querySelector(".a");
searchMovies.addEventListener("click", async function (a) {
  try {
    const valueSearch = document.querySelector(".b").value;
    const ambilApi = await apiMovie(valueSearch);
    movieLoop(ambilApi);
  } catch (e) {
    alert(e);
  }
});
// tampilkan pencarian film

// lihat show details

document.addEventListener("click", async function (e) {
  try {
    if (e.target.classList.contains("nge")) {
      const detailMoviesCard = document.querySelector(".ja");
      const imdbId = e.target.dataset.imdb;
      const apiDetails = await getMoviesDetail(imdbId);
      const tampilkan = showDetailMovies(apiDetails);
      console.log(tampilkan);
      detailMoviesCard.innerHTML = tampilkan;
    }
  } catch {
    console.error(err);
  }
});
