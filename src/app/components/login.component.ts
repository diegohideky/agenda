import { Component, OnInit } from "@angular/core";
import { Router }            from "@angular/router";

import { Account } from "../models/account";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-login",
  templateUrl: "../views/login.component.html"
})
export class LoginComponent implements OnInit {
  private account = Account;
  private form = {};

  constructor (
    private accountService: AccountService,
    private router: Router
  ) { }

  submitForm(account: Account): void {
    this.accountService.logIn(account)
      .then(res => {
        this.router.navigateByUrl("/agenda");
      });
  }

  ngOnInit(): void {}
}
