import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material/material.module';

import { CodigoRoutingModule } from './codigo-routing.module';
import { CodigoComponent } from './codigo.component';


@NgModule({
  declarations: [
    CodigoComponent
  ],
  imports: [
    CommonModule,
    CodigoRoutingModule,
    MaterialModule
  ]
})
export class CodigoModule { }
