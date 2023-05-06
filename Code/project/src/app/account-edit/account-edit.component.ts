import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountAPIService } from '../account-api.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent {
  account: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: AccountAPIService,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.accountService.getAccount(id).subscribe(data => {
      this.account = data;
    });
  }
  putAccount() {
    this.accountService.putAccount(this.account).subscribe(data => {
      this.account = data;
      this.router.navigate(['account-detail']);
    });
  }
  openMenu(){
    this.router.navigate(['account-edit'])
  }
  openMenu2(){
    this.router.navigate(['order'])
  }
  openMenu3(){
    this.router.navigate(['account-detail'])
  }
  onSubmit(){

  }
}
