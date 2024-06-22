import { UserLoggedService } from './../../Services/user-logged.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  form:FormGroup;
  formLogin:FormGroup
  passwordMatch:boolean;
  toggle:string;
  constructor(private fb:FormBuilder, private loggService:UserLoggedService, private router:Router){

    this.form=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirmPassword:['',[Validators.required,Validators.minLength(5)]],
      
    });
    this.formLogin=fb.group({
      emailLogin:['',[Validators.required,Validators.email]],
      passwordLogin:['',[Validators.required,Validators.minLength(5)]]
    });

this.passwordMatch=true;
this.toggle="register";
  }
  ngOnInit(): void {
    
  }
  submitForm(): void {
    if (this.form.valid) {
      if(this.password?.value==this.confirmPassword?.value){
        this.passwordMatch==true;
        //console.log(this.form.value);
        this.loggService.userRegister(this.email?.value,this.password?.value);
        this.router.navigateByUrl('/Home');
        
      }else{
        this.confirmPassword?.setErrors({invalid:true});
        this.passwordMatch=false;
      }
      
    }
  }
  submitLogin(): void {
    if (this.formLogin.valid) {
        console.log(this.formLogin.value);
        this.loggService.isUserLogin(this.emailLogin?.value,this.passwordLogin?.value);
      }
      
    }
  

  
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
  get mobile() {
    return this.form.get('mobile');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get emailLogin() {
    return this.formLogin.get('emailLogin');
  }
  get passwordLogin() {
    return this.formLogin.get('passwordLogin');
  }

log(){
  this.toggle="login";

}
reg(){
  this.toggle="register";
}
}
