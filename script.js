const movie2025Button = document.getElementById("movie2025");
const movieList = document.getElementById("movieList");

movie2025Button.addEventListener("click", async function () {
  movieList.innerHTML = "<p>読み込み中...</p>";

  try {
    const response = await fetch("movies2025.txt");

    if (!response.ok) {
      throw new Error("ファイルが見つかりません");
    }

    const text = await response.text();
    const lines = text.split("\n");

    movieList.innerHTML = "";

    lines.forEach(function (line) {
      line = line.trim();

      if (!line || line.startsWith("ALL")) {
        return;
      }

      const movie = document.createElement("p");
      movie.textContent = line;

      movieList.appendChild(movie);
    });

  } catch (error) {
    movieList.innerHTML = "<p>映画データを読み込めませんでした。</p>";
    console.error(error);
  }
});