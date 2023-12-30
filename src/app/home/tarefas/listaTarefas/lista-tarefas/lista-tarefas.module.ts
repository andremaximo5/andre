import { PoPageDynamicSearchModule } from '@portinari/portinari-templates';
import { TarefasModule } from './../../tarefas.module';
import { PoModule } from '@portinari/portinari-ui';
import { ListaTarefasComponent } from './lista-tarefas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ListaTarefasComponent],
  imports: [
    CommonModule,
    PoModule,
    TarefasModule,
    PoPageDynamicSearchModule
  ],
  exports: [
    ListaTarefasComponent
  ]

})
export class ListaTarefasModule { }
