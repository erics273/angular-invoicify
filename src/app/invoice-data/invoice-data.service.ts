import { Injectable } from '@angular/core';
import { Invoice, InvoiceDTO } from './invoice';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ClientDataService } from '../client-data/client-data.service';
import { Client } from '../client-data/client';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';

@Injectable()
export class InvoiceDataService {
  private _invoices: Invoice[];

  constructor(
    private _storage: LocalStorageService,
    private _clientData: ClientDataService,
    private _recordData: BillingRecordDataService
  ) {}

  public add(id: string, billingFrom: Date, billingTo: Date, client: Client) {
    this.getAll();
    this._invoices.push(new Invoice(id, billingFrom, billingTo, [], client));
    this._storage.save('invoices', this._invoices);
  }

  public getAll(): Invoice[] {
    if (!this._invoices) {
      this._invoices = this._storage
        .get<InvoiceDTO[]>('invoices', [])
        .map((x: InvoiceDTO) => {
          const invoice = new Invoice(
            x.id,
            new Date(x.billingFrom),
            new Date(x.billingTo),
            this._recordData.getAllByIds(x.recordIds),
            this._clientData.getById(x.clientId)
          );
          if (x.closed) {
            invoice.close(x.closed);

            if (x.paid) {
              invoice.pay(x.paid);
            }
          }
          return invoice;
        });
    }
    return [...this._invoices];
  }

  public getByNumber(number: string): Invoice {
    return this.getAll().find(x => x.number === number);
  }

  public update(invoice: Invoice): any {
    this._storage.save('invoices', this._invoices);
  }

  public deleteAll(): any {
    this._storage.delete('invoices');
    this._invoices = [];
  }
}
