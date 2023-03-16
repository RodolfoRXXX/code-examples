import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraNormalComponent } from './pages/calculadora-normal/calculadora-normal.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'normal', pathMatch: 'full' },
  { path: 'normal', component: CalculadoraNormalComponent },
  { path: 'cientifica', loadChildren: () => import('./pages/calculadora-cientifica/calculadora-cientifica.module').then(m => m.CalculadoraCientificaModule) },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
