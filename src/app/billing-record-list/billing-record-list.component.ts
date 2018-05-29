import { Component, OnInit, ViewChild } from '@angular/core';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';
import { BillingRecord } from '../billing-record-data/billing-record';
import { BillingRecordFormComponent } from './billing-record-form.component';
import { ClientDataService } from '../client-data/client-data.service';

@Component({
  selector: 'app-billing-record-list',
  templateUrl: './billing-record-list.component.html',
  styleUrls: ['../layout-styles.scss', './billing-record-list.component.scss']
})
export class BillingRecordListComponent implements OnInit {
  private _records: BillingRecord[];
  private _clientCount: number;
  private _showChild: boolean;
  @ViewChild(BillingRecordFormComponent) private _form: BillingRecordFormComponent;

  constructor(
    private _recordsData: BillingRecordDataService,
    private _clientData: ClientDataService
  ) {}

  public ngOnInit() {
    this._records = this._recordsData.getAll();
    this._clientCount = this._clientData.getAllActive().length;
  }

  public showNewRecordForm() {
    this._form.reset();
    this._showChild = true;
  }

  public hideNewRecordForm() {
    this._showChild = false;
    this._records = this._recordsData.getAll();
  }

  public get records() { return this._records; }
  public get showChild() { return this._showChild; }
  public get clientCount() { return this._clientCount; }

}
