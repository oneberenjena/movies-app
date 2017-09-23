import { MovieFilterPipe } from './../../pipes/movie-filter.pipe';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public _movieService:MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    let inception: Movie = {
      title: "Inception",
      genre: ["Action", "Adventure", "Sci-Fi"],
      director: "Christopher Nolan",
      duration: "2h 28min",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      year: 2010,
      description: "A thief, who steals corporate secrets through use " +
      "of dream-sharing technology, is given the inverse task of planting " +
      "an idea into the mind of a CEO.",
      image: '../../../assets/img/inception.jpg'
    };
    let fightClub: Movie = {
      title: "Fight Club",
      genre: ["Drama"],
      director: "David Fincher",
      duration: "2h 19min",
      cast: "Brad Pitt, Edward Norton, Meat Loaf",
      year: 1999,
      description: "An insomniac office worker, looking for" +
      "a way to change his life, crosses paths with a devil-may-care " +
      "soap maker, forming an underground fight club that evolves into " +
      "something much, much more.",
      image: '../../../assets/img/fightclub.jpg'
    };
    let takenI: Movie = {
      title: "Taken",
      genre: ["Action", "Crime", "Thriller"],
      director: "Pierre Morel",
      duration: "1h 33min",
      cast: "Liam Neeson, Maggie Grace, Famke Janssen",
      year: 2008,
      description: "A retired CIA agent travels across Europe" +
      "and relies on his old skills to save his estranged daughter" +
      ", who has been kidnapped while on a trip to Paris.",
      image: '../../../assets/img/taken.jpg'
    };
    let interestellar: Movie = {
      title: "Interestellar",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      director: "Christopher Nolan",
      duration: "2h 49min",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      year: 2014,
      description: "A team of explorers travel through a wormhole in space " +
      "in an attempt to ensure humanity's survival.",
      image: '../../../assets/img/interestellar.jpg'
    }
    this._movieService.pushMovie(interestellar);
    this._movieService.pushMovie(inception);
    this._movieService.pushMovie(fightClub);
    this._movieService.pushMovie(takenI);
    
    this._movieService.getMovies();
  }


}
