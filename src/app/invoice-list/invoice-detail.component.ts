import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Invoice } from '../invoice-data/invoice';
import { InvoiceRecordModalComponent } from './invoice-record-modal.component';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';
import { BillingRecord } from '../billing-record-data/billing-record';
import { InvoiceDataService } from '../invoice-data/invoice-data.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  private _availableBillingRecords: BillingRecord[];
  public showModal: boolean;
  @Input() public invoice: Invoice;
  @ViewChild(InvoiceRecordModalComponent) public modal;

  constructor(
    private _recordData: BillingRecordDataService,
    private _invoiceData: InvoiceDataService,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this._route
      .paramMap
      .subscribe((paramMap: ParamMap) => {
        this.invoice = this._invoiceData.getByNumber(paramMap.get('id'));
        this.getRecordsForClient();
      });
  }

  public showRecordModal() {
    this.showModal = true;
  }

  public closeRecordModal() {
    this.showModal = false;
  }

  public handleAssociation(records: BillingRecord[]) {
    this.closeRecordModal();
    for (let record of records) {
      this.invoice.addRecord(record);
      this._recordData.update(record);
    }
    this._invoiceData.update(this.invoice);
    this.getRecordsForClient();
  }

  public get availableBillingRecords() { return this._availableBillingRecords; }

  private getRecordsForClient() {
    this._availableBillingRecords = this._recordData
      .getAllUnbilled()
      .filter(x => x.client.id === this.invoice.client.id);
  }

}
