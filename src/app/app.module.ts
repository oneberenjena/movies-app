import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
// Routes
import { APP_ROUTING } from './app.routes';

// Pipes
import { ActorsPipe } from './pipes/actors.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    AddMovieComponent,
    ActorsPipe,
    SortByPipe,
    MovieFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
