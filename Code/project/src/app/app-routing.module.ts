import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { OrderComponent } from './account-order/order.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "account-detail", component: AccountDetailComponent},
  {path: "account-edit", component: AccountEditComponent},
  {path: "order", component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  LoginComponent,
  AccountDetailComponent,
  AccountEditComponent,
  OrderComponent
]
