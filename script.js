const movie2025Button = document.getElementById("movie2025");
const movieList = document.getElementById("movieList");

movie2025Button.addEventListener("click", function () {
  movieList.textContent = "映画2025を表示しました！";
});