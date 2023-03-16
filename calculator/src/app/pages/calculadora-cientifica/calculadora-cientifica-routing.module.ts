import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraCientificaComponent } from './calculadora-cientifica.component';

const routes: Routes = [{ path: '', component: CalculadoraCientificaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraCientificaRoutingModule { }
