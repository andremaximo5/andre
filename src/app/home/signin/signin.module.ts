import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    ReactiveFormsModule
  ],
  exports:[
    SigninComponent
  ]
})
export class SigninModule { }
