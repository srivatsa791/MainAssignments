class Movie {
  constructor(movieName, studioName, rating = "PG") {
    this.movieName = movieName;
    this.studioName = studioName;
    this.rating = rating;
  }
  getPG(movieDetails) {
    let FilteredMovies = [];
    for (let i = 0; i < movieDetails.length; i++) {
      if (movieDetails[i].rating == "PG") {
        FilteredMovies.push(movieDetails[i]);
      }
    }
    return FilteredMovies;
  }
}

let movieOne = new Movie("Casino Royale", "Eon Productions", "PG13");
let movieTwo = new Movie("BreakingBad", "Fox", "Foul Language");
let movieThree = new Movie("Game of Thrones", "HBO", "Adult Rated");
let movieFour = new Movie("Prison Break", " Sony", "PG");
let movieFive = new Movie("Baahubali", "aark", "PG13");
let movieSix = new Movie("Infinity War", "Marvel Studious", "PG");
let movieSeven = new Movie("Dark", "A Netflix Original");

let movieDetails = [
  movieOne,
  movieTwo,
  movieThree,
  movieFour,
  movieFive,
  movieSix,
  movieSeven,
];
console.log(movieOne.getPG(movieDetails));
