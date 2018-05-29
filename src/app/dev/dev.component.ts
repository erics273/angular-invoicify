import {
  Component
} from '@angular/core';
import { InvoiceDataService } from '../invoice-data/invoice-data.service';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';
import { ClientDataService } from '../client-data/client-data.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['../layout-styles.scss', './dev.component.scss']
})
export class DevComponent {

  constructor(
    private _invoiceData: InvoiceDataService,
    private _recordData: BillingRecordDataService,
    private _clientData: ClientDataService
  ) {}

  public clearClients() {
    this._clientData.deleteAll();
    this._recordData.deleteAll();
    this._invoiceData.deleteAll();
  }

  public clearRecords() {
    this._recordData.deleteAll();
    this._invoiceData.deleteAll();
  }

  public clearInvoices() {
    this._invoiceData.deleteAll();
    this._recordData
      .getAll()
      .forEach(x => x.invoiced = false);
    this._recordData.update(undefined);
  }

}
