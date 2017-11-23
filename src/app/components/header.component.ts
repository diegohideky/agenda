import { Component } from "@angular/core";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-header",
  templateUrl: "../views/header.component.html"
})
export class HeaderComponent {
  constructor(
    private accountService: AccountService
  ) {}
}
