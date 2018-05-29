import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';
import { Client } from '../client-data/client';
import { ClientDataService } from '../client-data/client-data.service';

@Component({
  selector: 'app-billing-record-form',
  templateUrl: './billing-record-form.component.html',
  styleUrls: ['../layout-styles.scss', './billing-record-form.component.scss']
})
export class BillingRecordFormComponent implements OnInit {
  public description: string;
  public rate: number;
  public amount: number;
  public clientId: number | string;
  private _clients: Client[];

  @ViewChild(NgForm) public newClientForm: NgForm;
  @Output() public wantsClose: EventEmitter<boolean>;

  constructor(
    private _recordsData: BillingRecordDataService,
    private _clientData: ClientDataService
  ) {
    this.wantsClose = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {
    this._clients = this._clientData.getAll().filter(x => x.active);
  }

  public reset() {
    this.newClientForm.reset();
    setTimeout(this.clientId = '', 0);
  }

  public addNewBillingRecord() {
    try {
    this.clientId = Number.parseInt(this.clientId.toString());
    const client = this._clientData.getById(this.clientId);
    this._recordsData.add(this.rate, this.amount, client, this.description);
    this.newClientForm.reset();
    this.wantsClose.emit(true);
    } catch (e) {
      console.error(e);
    }
  }

  public get clients() { return this._clients; }

}
