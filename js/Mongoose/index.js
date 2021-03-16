const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
console.log("CONNECTION OPEN!!!");
})
.catch(err => {
  console.log("OH NO ERROR!!!!");
  console.log(err);
})

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});
const Movie = mongoose.model('Movie', movieSchema);
const Avenger = new Movie({title: 'Avengers Endgame', year: 2019, score: 9.5, rating: 'R' })

Movie.insertMany([
  {title: 'Veronica', year: 2013, score: 8.4, rating: 'UG' },
  {title: 'Starwars', year: 2014, score: 8.1, rating: 'R' },
  {title: 'Godfather', year: 1979, score: 9.4, rating: 'UG' },
  {title: 'Boss Baby', year: 2011, score: 8.2, rating: 'R' }
])
.then(data =>{
  console.log("IT WORKED!!!");
  console.log(data);  
})