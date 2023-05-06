import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';//
import { ReactiveFormsModule } from '@angular/forms';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { OrderComponent } from './account-order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountDetailComponent,
    AccountEditComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JsonPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
