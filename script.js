const movieButtons = [
  { button: "movie2022", list: "list2022", file: "movies2022.txt" },
  { button: "movie2023", list: "list2023", file: "movies2023.txt" },
  { button: "movie2024", list: "list2024", file: "movies2024.txt" },
  { button: "movie2025", list: "list2025", file: "movies2025.txt" }
];

movieButtons.forEach(function (movie) {
  const button = document.getElementById(movie.button);
  const list = document.getElementById(movie.list);

  let moviesVisible = false;

  button.addEventListener("click", async function () {

    if (moviesVisible) {
      list.innerHTML = "";
      moviesVisible = false;
      return;
    }

    const response = await fetch(movie.file);
    const text = await response.text();

    list.innerHTML = "";

    const lines = text.split("\n");

    lines.forEach(function (line) {
      if (line.trim() === "") {
        return;
      }

      const movieText = document.createElement("p");
      movieText.textContent = line;

      list.appendChild(movieText);
    });

    moviesVisible = true;
  });
});