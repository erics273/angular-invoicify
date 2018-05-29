import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    {
      title: 'Dashboard',
      path: '/',
      exact: true
    },
    {
      title: 'Clients',
      path: '/client-list'
    },
    {
      title: 'Billing Records',
      path: '/billing-record-list'
    },
    {
      title: 'Invoices',
      path: '/invoice-list'
    },
    {
      title: 'Dev Tools',
      path: '/dev'
    }
  ];
}
