import { Injectable } from '@angular/core';
import { MovieItem } from './movie-item';
import { BehaviorSubject } from 'rxjs';
import { ActorsItem } from './actors-item';
import { TvItem } from './tv-item';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
movieDetails!:BehaviorSubject<MovieItem>;
tvDetails!:BehaviorSubject<TvItem>;
actorDetails!:BehaviorSubject<ActorsItem>;
flagMovie:boolean;
flagTv:boolean;
flagActor:boolean;
  constructor() {
    //this.movieDetails=new BehaviorSubject<MovieItem>();
    this.flagMovie=false;
    this.flagTv=false;
    this.flagActor=false;
   }

   setMovieDetails(movie:MovieItem){
    if(this.flagMovie==false){
      this.movieDetails=new BehaviorSubject<MovieItem>(movie);
      this.flagMovie=true;

    }
    this.movieDetails?.next(movie);
   }

   setTvDetails(tv:TvItem){
    if(this.flagTv==false){
      this.tvDetails=new BehaviorSubject<TvItem>(tv);
      this.flagTv=true;

    }
    this.tvDetails?.next(tv);
   }

   setActorDetails(actor:ActorsItem){
    if(this.flagActor==false){
      this.actorDetails=new BehaviorSubject<ActorsItem>(actor);
      this.flagActor=true;

    }
    this.actorDetails?.next(actor);
   }
}
