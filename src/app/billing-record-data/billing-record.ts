/* START SOLUTION */
import { Client } from '../client-data/client';
/* END SOLUTION */

export interface BillingRecordDTO {
  id: number;
  rate: number;
  amount: number;
  clientId: number;
  description: string;
  invoiced: boolean;
}

export class BillingRecord {
  [key: string]: any;

  /* START SOLUTION */
  private _data: BillingRecordDTO;

  constructor(
    id: number,
    rate: number,
    amount: number,
    private _client: Client,
    description: string,
    invoiced = false
  ) {
    if (!id) {
      id = Math.floor(Math.random() * 100000);
    }
    this._data = {
      id,
      rate,
      amount,
      description,
      clientId: this._client.id,
      invoiced
    };
  }

  public toJSON() {
    return this._data;
  }

  public get total() {
    return this.rate * this.amount;
  }

  public get id() { return this._data.id; }
  public get rate() { return this._data.rate; }
  public get amount() { return this._data.amount; }
  public get description() { return this._data.description; }
  public get client() { return this._client; }
  public get invoiced() { return this._data.invoiced; }
  public set invoiced(value: boolean) { this._data.invoiced = value; }
  /* ELSE
  // Start uncommenting each test in the billing-record.spec.ts file,
  // one-by-one, and make each test pass before you continue to the next one.
  END SOLUTION */
}
