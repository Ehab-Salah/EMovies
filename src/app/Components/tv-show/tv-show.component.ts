import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { DetailsService } from '../../Services/details.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TvItem } from '../../Services/tv-item';

@Component({
  selector: 'app-tv-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show.component.html',
  styleUrl: './tv-show.component.scss'
})
export class TvShowComponent implements OnInit{ 
  tvList:TvItem[];
  page:number;
  constructor(private http:MovieService , private movieDet:DetailsService, private router:Router){
  this.tvList=[];
  this.page=1;

  }
  ngOnInit(): void {
    this.getTv();

  }

  getTv(){
    this.http.getTVShow(this.page).subscribe(data=>{
      {this.tvList=Object(data)["results"]}
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
    this.getTv();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setTvDet(item:TvItem){
    console.log("item:  ",item);
    this.movieDet.setTvDetails(item);
    this.router.navigateByUrl('/TvDetails');
  }
}
