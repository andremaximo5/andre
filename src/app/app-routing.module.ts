import { TarefasComponent } from './home/tarefas/tarefas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { ListaTarefasComponent } from './home/tarefas/listaTarefas/lista-tarefas/lista-tarefas.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'tarefas',
  component: ListaTarefasComponent
},
{
  path: '',
  component: SigninComponent
},
{
  path: '**',
  component: NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
