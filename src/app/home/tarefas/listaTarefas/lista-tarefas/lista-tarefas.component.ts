import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@portinari/portinari-ui';
import { Tarefa } from 'src/app/core/tarefa/tarefa';
import { TarefaService } from 'src/app/core/tarefa/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  readonly body: string = 'XXX';
  listaTarefas: Tarefa[];
  filter: string = '';
  listaTarefasFilter: Tarefa[]


  profileActions: Array<PoToolbarAction> = [ { icon: 'po-icon-exit', label: 'Exit', type: 'danger',
  separator: true, action: item => this.router.navigate(['']) }
  ];
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClickHome.bind(this) },
    { label: 'Tarefas', action: this.onClick.bind(this) }
  ];

  private onClick() {
    this.router.navigate(['tarefas']) ;
  }

  private onChangeDisclaimers() {
   this.listaTarefas = this.listaTarefasFilter;
   console.log(this.listaTarefas);
   this.listaTarefasFilter = [];
  }

  private onClickHome() {
    this.router.navigate(['home']);
  }

  private openModal(){
    console.log('Teste')
  }
  private onQuickSearch(descriptionQuery){
      descriptionQuery = descriptionQuery
        .trim()
        .toLowerCase();
      if (descriptionQuery) {
        this.listaTarefasFilter = this.listaTarefas;
        this.listaTarefas = this.listaTarefas.filter( tarefas => tarefas.nome.toLowerCase().includes(descriptionQuery))
        console.log(this.listaTarefasFilter);
      } else {
        return this.listaTarefas;
      }}
  constructor(private router: Router, private tarefasServices: TarefaService ) { }

  ngOnInit() {
    this.getTarefas();
  }
  getTarefas() {
    return this.tarefasServices.getTarefa().subscribe(
     res => this.listaTarefas = res);
  }

}

