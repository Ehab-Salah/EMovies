import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoggedService } from '../../Services/user-logged.service';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent implements OnInit{
userLogged:boolean;
  constructor(private loggService:UserLoggedService){
this.userLogged=loggService.isUserLogged();

  }
  ngOnInit(): void {
    this.loggService.isLogged.subscribe(data=>{
      this.userLogged=data;
    });  }
    loggout(){
      this.loggService.loggout();
    }
}
