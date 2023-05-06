import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AccountAPIService } from '../account-api.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form!: FormGroup;
  loginForm!: FormGroup;
  isSubmitted = true;
  errMessage: string=''
  constructor(
    private _service: AccountAPIService,
    private router: Router ) {}

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      });
    }



  onSubmit(loginForm: FormGroup) {
    console.log(loginForm)
    this._service.postLogin(loginForm.value).subscribe(
      response =>{
        console.log(response);
        const user = response;
        localStorage.setItem('password', user.password);
        localStorage.setItem('Email', user.Email);
        // this.router.navigate(['/accounts'])
      }
    )
    // const account = this._service.
    // const email =  new FormControl('', [Validators.required, Validators.email])
    // const password = new FormControl('', Validators.required)
    // const account = {
    //   email: email,
    //   password: password
    // };
    // this._service.postLogin(account).subscribe((data) => {
    //     this.accounts = data;
    //     this.router.navigate(['account-detail'])
    //     // handle success here
    //   },
    //   (err) => {
    //     this.errMessage = err.error.message;
    //     // handle error here
    //   }
    // )
  }
}
