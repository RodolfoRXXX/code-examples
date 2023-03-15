import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-setting',
  template: `
    <button mat-icon-button matTooltip="Tipo" [matMenuTriggerFor]="menu_setting" class="" aria-label="choose icon">
      <mat-icon>settings</mat-icon>
    </button>
    <mat-menu #menu_setting="matMenu" xPosition="before">
      <a href="#" mat-menu-item><mat-icon>dvr</mat-icon>Calculadora normal</a>
      <a href="#" mat-menu-item><mat-icon>dvr</mat-icon>Calculadora científica</a>
    </mat-menu>
  `,
  styleUrls: ['./btn-setting.component.css']
})
export class BtnSettingComponent {

}
