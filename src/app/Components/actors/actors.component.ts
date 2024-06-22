import { Component, OnInit } from '@angular/core';
import { ActorsItem } from '../../Services/actors-item';
import { MovieService } from '../../Services/movie.service';
import { CommonModule } from '@angular/common';
import { DetailsService } from '../../Services/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss'
})
export class ActorsComponent implements OnInit{
  actorsList:ActorsItem[];
  page:number;
  constructor(private http:MovieService , private movieDet:DetailsService, private router:Router){
    this.actorsList=[];
    this.page=1;
  }
  ngOnInit(): void {
    this.getActors();
  }


  getActors(){
    this.http.getActors(this.page).subscribe(data=>{
      {this.actorsList=Object(data)["results"]}
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
    this.getActors();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  setActorDet(item:ActorsItem){
    console.log("item:  ",item);
    this.movieDet.setActorDetails(item);
    this.router.navigateByUrl('/ActorDetails');
  }
}
