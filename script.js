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

const bestButtons = [
  { id: "best2022", file: "2022_BEST.txt", list: "bestList2022" },
  { id: "best2023", file: "2023_BEST.txt", list: "bestList2023" },
  { id: "best2024", file: "2024_BEST.txt", list: "bestList2024" },
  { id: "best2025", file: "2025_BEST.txt", list: "bestList2025" }
];

bestButtons.forEach(function (best) {
  const button = document.getElementById(best.id);
  const bestList = document.getElementById(best.list);

  let bestVisible = false;

  button.addEventListener("click", async function () {

    if (bestVisible) {
      bestList.innerHTML = "";
      bestVisible = false;
      return;
    }

    const response = await fetch(best.file);
    const text = await response.text();

    bestList.innerHTML = "";

    const lines = text.split("\n");

    lines.forEach(function (line) {
      if (line.trim() === "") {
        return;
      }

      const bestText = document.createElement("p");
      bestText.textContent = line;

      bestList.appendChild(bestText);
    });

    bestVisible = true;
  });
});