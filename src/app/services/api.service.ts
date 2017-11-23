import { Injectable }    from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Account }       from "./../models/account";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ApiService {

  private headers = new Headers({
    "Content-Type": "application/json; charset=utf-8"
  });
  private host = "http://17360389.ngrok.io/springDataJpa";

  private handleError(error: any): Promise<any> {
    console.error("Houve um erro", error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) { }

  findAgendas(): Promise<any> {
    const url = this.host + "/agenda/";
    return this.http
      .get(url, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  insertAgenda(params: any): Promise<any> {
    const url = this.host + "/v2/5a148f6c2e00005f00eab3f0";
    return this.http
      .post(url, params, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  updateAgenda(params: any): Promise<any> {
    const url = this.host + "/agenda/" + params.id;
    return this.http
      .put(url, params, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  deleteAgenda(params: any): Promise<any> {
    const url = this.host + "/agenda/" + params.id;
    return this.http
      .delete(url, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  logIn(params: any): Promise<any> {
    const url = this.host + "/login";
    return this.http
      .post(url, params, this.headers)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
}

