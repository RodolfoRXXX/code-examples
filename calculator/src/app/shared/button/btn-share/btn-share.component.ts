import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-btn-share',
  template: `
    <button mat-icon-button matTooltip="Compartir" [matMenuTriggerFor]="menu_share" class="" aria-label="share icon">
      <mat-icon>share</mat-icon>
    </button>
    <mat-menu #menu_share="matMenu" xPosition="before">
      <button mat-menu-item (click)="share_social('whatsapp')"><mat-icon svgIcon="whatsapp"></mat-icon>Whatsapp</button>
      <button mat-menu-item (click)="share_social('instagram')"><mat-icon svgIcon="instagram"></mat-icon>Instagram</button>
      <button mat-menu-item (click)="share_social('facebook')"><mat-icon svgIcon="facebook"></mat-icon>Facebook</button>
    </mat-menu>
  `,
  styleUrls: ['./btn-share.component.css']
})
export class BtnShareComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `whatsapp`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/iconSvg/whatsapp.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/iconSvg/instagram.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/iconSvg/facebook.svg")
    );
  }

  share_social(social: String){
    console.log(social);
  }

}
