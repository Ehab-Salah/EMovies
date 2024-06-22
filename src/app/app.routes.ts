import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TvShowComponent } from './Components/tv-show/tv-show.component';
import { ActorsComponent } from './Components/actors/actors.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { ActorDetailsComponent } from './Components/actor-details/actor-details.component';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuardGuard } from './Services/auth-guard.guard';

export const routes: Routes = [
    {path:"", redirectTo:"Home" ,pathMatch:"full"},
    {path:"Home" , component :HomeComponent},
    {path:"Movies", loadComponent:()=>
        import("./Components/movies/movies.component").then((m)=>m.MoviesComponent),
        canActivate:[authGuardGuard] },
    {path:"TvShow", loadComponent:()=>
        import("./Components/tv-show/tv-show.component").then((m)=>m.TvShowComponent),
     canActivate:[authGuardGuard]},
    {path:"Actors",  loadComponent:()=>
        import("./Components/actors/actors.component").then((m)=>m.ActorsComponent),
    canActivate:[authGuardGuard]},
    {path:"MovieDetails",  loadComponent:()=>
        import("./Components/movie-details/movie-details.component").then((m)=>m.MovieDetailsComponent),
    canActivate:[authGuardGuard]},
    {path:"ActorDetails",  loadComponent:()=>
        import("./Components/actor-details/actor-details.component").then((m)=>m.ActorDetailsComponent),
    canActivate:[authGuardGuard]},
    {path:"TvDetails",  loadComponent:()=>
        import("./Components/tv-details/tv-details.component").then((m)=>m.TvDetailsComponent),
    canActivate:[authGuardGuard]},
    {path:"Login", component:LoginComponent}
];
