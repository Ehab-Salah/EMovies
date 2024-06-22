import { Component, OnInit } from '@angular/core';
import { TvItem } from '../../Services/tv-item';
import { DetailsService } from '../../Services/details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.scss'
})
export class TvDetailsComponent implements OnInit{
  tvDetails!:TvItem;
  constructor(private details:DetailsService){

  }
  ngOnInit(): void {
    this.details.tvDetails.subscribe(tv=>{
      this.tvDetails=tv;
    })
  }

}
