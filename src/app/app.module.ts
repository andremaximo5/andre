import { ListaTarefasModule } from './home/tarefas/listaTarefas/lista-tarefas/lista-tarefas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundModule } from './not-found/not-found.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NotFoundModule,
    HomeModule,
    ListaTarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
