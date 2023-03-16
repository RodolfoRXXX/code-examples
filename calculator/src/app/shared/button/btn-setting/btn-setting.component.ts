import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-setting',
  template: `
    <button mat-icon-button matTooltip="Tipo" [matMenuTriggerFor]="menu_setting" class="" aria-label="choose icon">
      <mat-icon>settings</mat-icon>
    </button>
    <mat-menu #menu_setting="matMenu" xPosition="before">
      <a *ngFor="let route of routes" [routerLink]="route.link"  mat-menu-item><mat-icon>{{route.icon}}</mat-icon>{{route.name}}</a>
    </mat-menu>
  `,
  styleUrls: ['./btn-setting.component.css']
})
export class BtnSettingComponent implements OnInit {
  
  @Input() routes!: any;

  ngOnInit(): void {
  }


}
