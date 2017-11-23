import { Component, OnInit } from "@angular/core";
import { Agenda }              from "../models/agenda";
import { AgendaService }       from "../services/agenda.service";

@Component({
  selector: "app-home",
  templateUrl: "../views/agenda.component.html"
})
export class AgendaComponent implements OnInit {
  private br: any;
  private agendas: Agenda[];
  private id = 1;
  private form = {
    date: new Date(),
    usuario: {
      id: 1,
      nome: "admin"
    }
  };
  private editForm = {};

  constructor(
    private agendaService: AgendaService
  ) { }

  getAgendas(): void {
    this.agendaService
      .getAgendas()
      .then(res => {
        this.agendas = res;
        this.id = this.agendas.length;
      });
  }

  submitForm(form: any): void {
    this.id ++;

    form.id = this.id;
    this.agendas.push(Object.assign({}, form));

    // this.agendaService
    //   .addAgenda(form)
    //   .then(res => {
    //     this.agendas.push(Object.assign({}, res));
    //   });
  }

  editAgenda(agenda: any): void {
    this.editForm = agenda;
  }

  updateAgenda(agenda: any): void {
    const index = this.agendas.indexOf(agenda);

    this.agendas[index] = agenda;

    // this.agendaService
    //   .updateAgenda(agenda)
    //   .then(res => {
    //     const index = this.agendas.indexOf(agenda);
    //
    //     this.agendas[index] = agenda;
    //   });
  }

  deleteAgenda(agenda: any): void {
    const index = this.agendas.indexOf(agenda);

    this.agendas.splice(index, 1);

    // this.agendaService
    //   .deleteAgenda(agenda)
    //   .then(res => {
        // const index = this.agendas.indexOf(agenda);

        // this.agendas.splice(index, 1);
      // });
  }

  cancelUpdate(): void {
    this.editForm = {};
  }

  ngOnInit(): void {
    this.getAgendas();

    this.br = {
      autoClose: true,
      firstDayOfWeek: 0,
      dateFormat: "DD/MM/YYYY HH:mm",
      dayNames: ["Domingo", "Segundo", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ]
    };
  }
}
