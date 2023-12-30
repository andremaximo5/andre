import { Tarefa } from './../../core/tarefa/tarefa';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/core/tarefa/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  listaTarefas: Tarefa[];
  filter: string = '';

  constructor(private tarefasServices: TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }
  getTarefas() {
    return this.tarefasServices.getTarefa().subscribe(
     res => this.listaTarefas = res);
  }

}
