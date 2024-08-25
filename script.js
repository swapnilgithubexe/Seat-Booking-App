//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
const select = document.getElementById("selectMovie");
moviesList.forEach((movie) => {
  let options = document.createElement("option");
  options.innerHTML = `${movie.movieName}  $${movie.price}`;
  select.appendChild(options);
});



select.addEventListener("input", (e) => {
  let movieDetails = e.target.value;
  let dollarIndex = movieDetails.indexOf("$");

  // Extract movie name and price
  let movie = movieDetails.substring(0, dollarIndex - 1);
  let price = parseFloat(movieDetails.substring(dollarIndex + 1));

  // Update global variables
  currMovie = movie;
  moviePrice = price;

  // Update the UI
  const movieNameElements = document.getElementsByClassName("movieName");
  const moviePriceElements = document.getElementsByClassName("moviePrice");

  // Assuming there's only one element with these classes
  if (movieNameElements.length > 0) {
    movieNameElements[0].innerHTML = movie;
  }

  if (moviePriceElements.length > 0) {
    moviePriceElements[0].innerHTML = `$${price.toFixed(2)}`;
  }
});

