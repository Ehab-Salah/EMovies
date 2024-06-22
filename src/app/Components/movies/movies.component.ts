import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { MovieItem } from '../../Services/movie-item';
import { CommonModule } from '@angular/common';
import { DetailsService } from '../../Services/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  movieList:MovieItem[];
  movieType:string;
  page:number;
  constructor(private http:MovieService , private movieDet:DetailsService, private router:Router){
  this.movieList=[];
  this.movieType="popular";
  this.page=1;

  }
  ngOnInit(): void {
    this.getMovies("popular");

  }

  getMovies(type:string){
    this.movieType=type;
    this.http.getPopularMovies(this.movieType,this.page).subscribe(data=>{
      {this.movieList=Object(data)["results"]}
    });
  }

  changePage(p:string){
    if(p=="next"){
      if(this.page<100){
        this.page++;
      }
    }
    else if(p=="prev"){
      if(this.page>1){
        this.page--;
      }
    }
    this.getMovies(this.movieType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setMovieDet(item:MovieItem){
    console.log("item:  ",item);
    this.movieDet.setMovieDetails(item);
    this.router.navigateByUrl('/MovieDetails');
  }
}
