/* START SOLUTION */
import { Client } from '../client-data/client';
import { BillingRecord } from '../billing-record-data/billing-record';
/* END SOLUTION */

export interface InvoiceDTO {
  id: string;
  clientId: number;
  billingFrom: number;
  billingTo: number;
  recordIds: number[];
  closed?: number;
  paid?: number;
}

/* START SOLUTION */
export class Invoice {
  private _data: InvoiceDTO;

  constructor(id: string, billingFrom: Date, billingTo: Date, private _records: BillingRecord[], private _client: Client) {
    this._data = {
      id,
      billingFrom: billingFrom.valueOf(),
      billingTo: billingTo.valueOf(),
      clientId: this._client.id,
      recordIds: this._records.map(x => x.id)
    };
  }

  public addRecord(record: BillingRecord) {
    record.invoiced = true;
    this._records.push(record);
    this._data.recordIds.push(record.id);
  }

  public toJSON() {
    return this._data;
  }

  public get total() {
    return this._records
      .reduce((acc, x) => acc + x.total, 0);
  }

  public close(closeDate?: number) {
    this._data.closed = closeDate || new Date().valueOf();
  }

  public pay(payDate?: number) {
    this._data.paid = payDate || new Date().valueOf();
  }

  public get number() { return this._data.id; }
  public get clientName() { return this._client.name; }
  public get client() { return this._client; }
  public get billingFrom() { return new Date(this._data.billingFrom); }
  public get billingTo() { return new Date(this._data.billingTo); }
  public get records() { return this._records; }
  public get closed() { return this._data.closed && new Date(this._data.closed); }
  public get paid() { return this._data.paid && new Date(this._data.paid); }
}
/* ELSE
// Start uncommenting each test in the invoice.spec.ts file, one-by-one, and
// make each test pass before you continue to the next one.
END SOLUTION */
