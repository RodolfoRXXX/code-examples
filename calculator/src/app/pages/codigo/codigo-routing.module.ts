import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodigoComponent } from './codigo.component';

const routes: Routes = [
  { path: '', component: CodigoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodigoRoutingModule { }
