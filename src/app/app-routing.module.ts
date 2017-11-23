import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent }       from "./components/login.component";
import { AgendaComponent }      from "./components/agenda.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "agenda", component: AgendaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
