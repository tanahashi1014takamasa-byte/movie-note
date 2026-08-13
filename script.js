const movie2025Button = document.getElementById("movie2025");
const movieList = document.getElementById("movieList");

movie2025Button.addEventListener("click", async function () {
  const response = await fetch("movies2025.txt");
  const text = await response.text();

  movie2025Button.style.display = "none";

  movieList.innerHTML = `
    <button id="backButton">戻る</button>
  `;

  const lines = text.split("\n");

  lines.forEach(function (line) {
    if (line.trim() === "") {
      return;
    }

    const movie = document.createElement("p");
    movie.textContent = line;

    movieList.appendChild(movie);
  });

  document.getElementById("backButton").addEventListener("click", function () {
    movieList.innerHTML = "";
    movie2025Button.style.display = "block";
  });
});