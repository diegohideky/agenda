import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Account }    from "../models/account";

@Injectable()
export class AccountService {

  constructor(
    private apiService: ApiService
  ) { }

  logIn(account: any): Promise<any> {
    return this.apiService.logIn(account);
  }
}
