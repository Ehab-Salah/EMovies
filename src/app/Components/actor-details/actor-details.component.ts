import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActorsItem } from '../../Services/actors-item';
import { DetailsService } from '../../Services/details.service';
import { MovieItem } from '../../Services/movie-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actor-details.component.html',
  styleUrl: './actor-details.component.scss'
})
export class ActorDetailsComponent implements OnInit{
  actorDetails!:ActorsItem;
  constructor(private details:DetailsService, private router:Router){

  }
  ngOnInit(): void {
    this.details.actorDetails.subscribe(actor=>{
      this.actorDetails=actor;
    })
  }
  setMovieDet(item:MovieItem){
    console.log("item:  ",item);
    this.details.setMovieDetails(item);
    this.router.navigateByUrl('/MovieDetails');
  }

}
