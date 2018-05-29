import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataService } from '../client-data/client-data.service';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';
import { InvoiceDataService } from '../invoice-data/invoice-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../layout-styles.scss', './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public activeClientCount: number;
  public inactiveClientCount: number;
  public notInvoicedAmount: number;
  public recordClientCount: number;
  public unpaidAmount: number;
  public unbilledAmount: number;

  constructor(
    private _clientData: ClientDataService,
    private _recordData: BillingRecordDataService,
    private _invoiceData: InvoiceDataService,
    private _router: Router
  ) {}

  public ngOnInit() {
    const clients = this._clientData.getAll();
    this.activeClientCount = clients.reduce((acc, x) => x.active ? acc + 1 : acc, 0);
    this.inactiveClientCount = clients.reduce((acc, x) => x.active ? acc : acc + 1, 0);

    const records = this._recordData.getAll();
    this.notInvoicedAmount = records.reduce((acc, x) => x.invoiced ? acc : acc + x.total, 0);
    this.recordClientCount = records.reduce((acc, x) => {
      if (!x.invoiced && acc.indexOf(x.client.id) < 0) {
        acc.push(x.client.id);
      }
      return acc;
    }, []).length;

    const invoices = this._invoiceData.getAll();
    this.unpaidAmount = invoices.reduce((acc, x) => {
      if (x.closed && !x.paid) {
        return acc + x.total;
      }
      return acc;
    }, 0);
    this.unbilledAmount = invoices.reduce((acc, x) => {
      if (!x.closed) {
        return acc + x.total;
      }
      return acc;
    }, 0);
  }

  public navigateTo(path: string) {
    this._router.navigate([path]);
  }
}
