import { BrowserModule }    from "@angular/platform-browser";
import { FormsModule }      from "@angular/forms";
import { NgModule }         from "@angular/core";
import { HttpModule }       from "@angular/http";
import { DateTimePickerModule } from "ng-pick-datetime";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }     from "./components/app.component";
import { HeaderComponent }  from "./components/header.component";
import { LoginComponent }   from "./components/login.component";
import { AgendaComponent }  from "./components/agenda.component";

import { ApiService }       from "./services/api.service";
import { AccountService }   from "./services/account.service";
import { AgendaService }    from "./services/agenda.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgendaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DateTimePickerModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AgendaService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
