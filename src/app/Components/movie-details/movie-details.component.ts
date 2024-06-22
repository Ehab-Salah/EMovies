import { Component, OnInit } from '@angular/core';
import { MovieItem } from '../../Services/movie-item';
import { DetailsService } from '../../Services/details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  movieDetails!:MovieItem;
  constructor(private details:DetailsService){

  }
  ngOnInit(): void {
    this.details.movieDetails.subscribe(movie=>{
      this.movieDetails=movie;
    })
  }

}
