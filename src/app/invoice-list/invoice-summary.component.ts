import { Component, Input } from '@angular/core';
import { Invoice } from '../invoice-data/invoice';
import { InvoiceDataService } from '../invoice-data/invoice-data.service';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['../layout-styles.scss', './invoice-summary.component.scss']
})
export class InvoiceSummaryComponent {

  @Input() public invoice: Invoice;

  constructor(
    private _invoiceData: InvoiceDataService
  ) {}

  public pay() {
    this.invoice.pay();
    this._invoiceData.update(this.invoice);
  }

  public close() {
    this.invoice.close();
    this._invoiceData.update(this.invoice);
  }

  public get shouldShowActions() {
    return (!this.invoice.closed || !this.invoice.paid) && this.invoice.total;
  }
}
