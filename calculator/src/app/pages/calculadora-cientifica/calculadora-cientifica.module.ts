import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraCientificaRoutingModule } from './calculadora-cientifica-routing.module';
import { CalculadoraCientificaComponent } from './calculadora-cientifica.component';


@NgModule({
  declarations: [
    CalculadoraCientificaComponent
  ],
  imports: [
    CommonModule,
    CalculadoraCientificaRoutingModule
  ]
})
export class CalculadoraCientificaModule { }
