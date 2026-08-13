const movieButtons = [
  { id: "movie2022", file: "movies2022.txt", list: "movieList2022" },
  { id: "movie2023", file: "movies2023.txt", list: "movieList2023" },
  { id: "movie2024", file: "movies2024.txt", list: "movieList2024" },
  { id: "movie2025", file: "movies2025.txt", list: "movieList2025" }
];

movieButtons.forEach(function (movie) {
  const button = document.getElementById(movie.id);
  const movieList = document.getElementById(movie.list);

  let moviesVisible = false;

  button.addEventListener("click", async function () {

    if (moviesVisible) {
      movieList.innerHTML = "";
      moviesVisible = false;
      return;
    }

    const response = await fetch(movie.file);
    const text = await response.text();

    movieList.innerHTML = "";

    const lines = text.split("\n");

    lines.forEach(function (line) {
      if (line.trim() === "") {
        return;
      }

      const movieText = document.createElement("p");
      movieText.textContent = line;

      movieList.appendChild(movieText);
    });

    moviesVisible = true;
  });
});