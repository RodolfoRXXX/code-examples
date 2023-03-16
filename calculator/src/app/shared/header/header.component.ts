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
      name: 'Calculadora normal'
    },
    {
      link: '/cientifica',
      icon: 'dvr',
      name: 'Calculadora cientifica'
    },
  ];

}
