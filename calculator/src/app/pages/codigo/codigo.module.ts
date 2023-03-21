import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodigoRoutingModule } from './codigo-routing.module';
import { CodigoComponent } from './codigo.component';


@NgModule({
  declarations: [
    CodigoComponent
  ],
  imports: [
    CommonModule,
    CodigoRoutingModule
  ]
})
export class CodigoModule { }
