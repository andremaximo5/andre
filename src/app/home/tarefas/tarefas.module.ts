import { PoPageDynamicSearchModule } from '@portinari/portinari-templates';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasComponent } from './tarefas.component';
import { PoModule } from '@portinari/portinari-ui';
import { Filterbyname } from './filter-by-name.pipe';


@NgModule({
  declarations: [
    TarefasComponent ,
    Filterbyname,

  ],

  imports: [
    CommonModule,
    PoModule,
    PoPageDynamicSearchModule

  ],
  exports: [
    TarefasComponent

  ]
})
export class TarefasModule { }
