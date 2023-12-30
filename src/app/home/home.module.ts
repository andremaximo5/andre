import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PoModule } from '@portinari/portinari-ui';
import { SigninModule } from './signin/signin.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { PoPageDynamicSearchModule } from '@portinari/portinari-templates';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PoModule,
    SigninModule,
    TarefasModule,
    PoPageDynamicSearchModule

  ],
  exports: [
    HomeComponent

  ]
})
export class HomeModule { }
