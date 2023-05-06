import { Component } from '@angular/core';
import { AccountAPIService, } from '../account-api.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from 'express';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent {
  account: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: AccountAPIService,
    private router: Router,

  )
  {
    const email = window.localStorage.getItem('Email')
    const password = window.localStorage.getItem('password')
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.accountService.getAccount(id).subscribe(data => {
      this.account = data;
    });
    console.log('chay dc')
  }
openMenu(){
  this.router.navigate(['account-edit'])
}
openMenu2(){
  this.router.navigate(['order'])
}
}
