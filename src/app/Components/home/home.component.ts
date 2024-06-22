import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { MovieItem } from '../../Services/movie-item';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movieList:MovieItem[];
  constructor(private movieService:MovieService){
    this.movieList=[];
  }
  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data=>
      {this.movieList=Object(data)["results"]}
      //{this.movieList=data;}
    )
    //console.log(Object(this.movieList[5])["backdrop_path"])
    //console.log(this.movieList[2]?.backdrop_path);

  }


}
