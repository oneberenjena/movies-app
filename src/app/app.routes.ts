import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES:Routes = [
    {
        path: 'movies', 
        component:MoviesComponent
    },
    {
        path: 'add-movie',
        component:AddMovieComponent
    },
    {
        path: '**', 
        pathMatch:'full', 
        redirectTo:'movies'
    }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);