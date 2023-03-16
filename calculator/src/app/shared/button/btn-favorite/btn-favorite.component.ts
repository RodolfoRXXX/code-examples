import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-favorite',
  template: `
    <button mat-icon-button matTooltip="Me Gusta" class="" aria-label="heart icon" (click)="like_toggle()">
      <mat-icon *ngIf="like">favorite</mat-icon>
      <mat-icon *ngIf="!like">favorite_border</mat-icon>
    </button>
  `,
  styleUrls: ['./btn-favorite.component.css']
})
export class BtnFavoriteComponent {

  like: boolean = false;

  like_toggle(){
    this.like = !this.like;
  }

}
