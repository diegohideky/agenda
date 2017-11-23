import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable()
export class AgendaService {
  constructor(
    private apiService: ApiService
  ) { }

  getAgendas(): Promise<any> {
    return this.apiService.findAgendas();
  }

  addAgenda(form: any): Promise<any> {
    return this.apiService.insertAgenda(form);
  }

  updateAgenda(form: any): Promise<any> {
    return this.apiService.updateAgenda(form);
  }

  deleteAgenda(form: any): Promise<any> {
    return this.apiService.deleteAgenda(form);
  }

}
