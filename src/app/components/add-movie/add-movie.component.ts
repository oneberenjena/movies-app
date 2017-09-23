import { Router } from '@angular/router';
import { MoviesComponent } from './../movies/movies.component';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public movie: Movie = new Movie();
  public badges: string = '<ul class="list-inline genres"></ul>';
  public genre: string = '<div class="card border-warning mb-3 badges">' +
  '<div class="card-body text-warning">'+ this.badges +'</div></div>';
  public genres: string[] = [];
   
  constructor(public _movieService: MovieService, public router:Router) { }

  ngOnInit() {
  }

  onClickGenre() {
    if ($('.genre input').val() == '' ){
      $('.badges').remove();
      $('.genre').after(this.genre);
    }

  }

  onBlurGenre(){
    if ($('.badges ul').children().length == 0){
      $('.badges').remove();
    }
  }

  onEnter(value: string) {
    if (value){
      let badge = "<li class='list-inline-item'>" +
      '<span class="badge badge-warning">' + 
      value + "</span></li>";
      $('.genres').append(badge);
      $('.genre input').val('');
      this.genres.push(value);
    }
  }

  onSubmit() {
    if (this.genres){
      this.movie['genre'] = this.genres;
    }
    this._movieService.pushMovie(this.movie);
    $('#exampleModal').modal('show');
    setTimeout(() => {

      $('#exampleModal').modal('hide')
      this.router.navigate(['/movies']);
    }, 3000)
  }

}
