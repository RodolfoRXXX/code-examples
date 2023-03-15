import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-favorite',
  template: `
    <button mat-icon-button matTooltip="Me Gusta" class="" aria-label="heart icon">
      <mat-icon *ngIf="false">favorite_border</mat-icon>
      <mat-icon>favorite_border</mat-icon>
    </button>
  `,
  styleUrls: ['./btn-favorite.component.css']
})
export class BtnFavoriteComponent {

}
