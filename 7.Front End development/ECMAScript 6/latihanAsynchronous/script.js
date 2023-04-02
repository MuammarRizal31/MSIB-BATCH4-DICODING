http://www.omdbapi.com/?apikey=41d03a10&s=avengers
const btnInp = document.querySelector(".btnInp");
btnInp.addEventListener("click", function () {
  const inp = document.querySelector(".inp").value;
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=41d03a10&s=" + inp,
    success: (result) => {
      const movies = result.Search;
      movies.forEach((m) => {
        const jange = document.querySelector(".jange");
        jange.innerHTML += showMovies(m);
      });

      // KETIKA TOMBOL DETAIL DI KLIK
      const detail = document.querySelectorAll(".modal-detail-button");
      detail.forEach((m) => {
        m.addEventListener("click", function () {
          const idImbd = this.getAttribute("data-imdbid");
          console.log();
          const le = document.querySelector(".le");

          $.ajax({
            url: "http://www.omdbapi.com/?apikey=41d03a10&i=" + idImbd,
            success: (r) => {
              le.innerHTML = showDetailMovies(r);
            },
            error: (e) => {
              console.log(e);
            },
          });
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});




function showMovies(m) {
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${m.Poster}" class="card-img-top" alt="?" />
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showDetailMovies(r) {
  return `<div class="col-md-4">
            <img src="${r.Poster}" alt="" class="img-fluid" />
        </div>
        <div class="col-md">
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
        </div>`;
}
