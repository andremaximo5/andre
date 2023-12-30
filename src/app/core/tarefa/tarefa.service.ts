import { Tarefa } from './tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }
  getTarefa() {
    return this.http.get<Tarefa[]>('http://localhost:3000/tarefa');
  }
}
