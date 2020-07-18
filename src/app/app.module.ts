import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { RecordModule } from './record/record.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CustomerModule,
    RecordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
