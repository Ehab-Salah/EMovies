import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
isLogged:BehaviorSubject<boolean>;
  constructor() { 
    this.isLogged=new BehaviorSubject<boolean>(false);
  }
  isUserLogin(em:string,pass:string){
    let email=localStorage.getItem("email");
    let password=localStorage.getItem("password");
    if(em==email){
      if(pass==password){
        this.isLogged.next(true);
        return true;
      }
    }
    this.isLogged.next(false);
    return false;
   
  }
  userRegister(email:string,password:string){
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    this.isLogged.next(true);
  }
  loggout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    this.isLogged.next(false);
  }
  isUserLogged():boolean{
    if(this.isLogged.value==true){
      return true;
    }else{return false;}
  }
}
