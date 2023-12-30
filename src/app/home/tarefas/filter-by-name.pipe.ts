import { Tarefa } from './../../core/tarefa/tarefa';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterbyname' })
export class Filterbyname implements PipeTransform {
  transform(tarefas: Tarefa[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
      .trim()
      .toLowerCase();
    if (descriptionQuery) {
      return tarefas.filter( tarefas => console.log(tarefas));
    } else {
      return tarefas;
    }
  }
}



