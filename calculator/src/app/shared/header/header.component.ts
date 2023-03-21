import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  header_routes = [
    {
      link: '/normal',
      icon: 'dvr',
      name: 'Calculadora'
    },
    {
      link: '/code',
      icon: 'build',
      name: 'Código'
    },
  ];

}
