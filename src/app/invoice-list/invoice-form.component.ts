import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientDataService } from '../client-data/client-data.service';
import { Client } from '../client-data/client';
import { InvoiceDataService } from '../invoice-data/invoice-data.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['../layout-styles.scss', './invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  public _clients: Client[];
  public number: string;
  public billingFrom: string;
  public billingTo: string;
  public clientId: number | string;

  @ViewChild(NgForm) public newInvoiceForm: NgForm;
  @Output() public wantsClose: EventEmitter<boolean>;

  constructor(
    private _clientData: ClientDataService,
    private _invoiceData: InvoiceDataService
  ) {
    this.wantsClose = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {
    this._clients = this._clientData.getAllActive();
  }

  public reset() {
    this.newInvoiceForm.reset();
    setTimeout(this.clientId = '', 0);
  }

  public addNewClient() {
    const clientId = Number.parseInt(this.clientId.toString());
    const client = this._clientData.getById(clientId);
    const from = new Date(Date.parse(this.billingFrom));
    from.setMinutes(from.getTimezoneOffset());
    const to = new Date(Date.parse(this.billingTo));
    to.setMinutes(to.getTimezoneOffset());
    this._invoiceData.add(this.number, from, to, client);
    this.wantsClose.emit(true);
    this.newInvoiceForm.reset();
  }

  public get clients() { return this._clients; }
}
