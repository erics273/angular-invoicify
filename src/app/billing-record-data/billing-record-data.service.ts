import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BillingRecord, BillingRecordDTO } from './billing-record';
import { ClientDataService } from '../client-data/client-data.service';
import { Client } from '../client-data/client';

@Injectable()
export class BillingRecordDataService {
  private _records: BillingRecord[];

  constructor(
    private _storage: LocalStorageService,
    private _clientData: ClientDataService
  ) {}

  public getAll(): BillingRecord[] {
    if (!this._records) {
      this._records = this._storage
        .get<BillingRecordDTO[]>('billing-records', [])
        .map((x: BillingRecordDTO) => new BillingRecord(
          x.id,
          x.rate,
          x.amount,
          this._clientData.getById(x.clientId),
          x.description,
          x.invoiced
        ));
    }
    return [...this._records];
  }

  public getAllUnbilled(): BillingRecord[] {
    return this.getAll()
      .filter(x => !x.invoiced);
  }

  public getAllByIds(recordIds: number[]): any {
    return this.getAll()
      .filter(x => recordIds.find(id => id === x.id));
  }

  public add(rate: number, amount: number, client: Client, description: string): any {
    this._records.push(new BillingRecord(
      0,
      rate,
      amount,
      client,
      description
    ));
    this._storage.save('billing-records', this._records);
  }

  public update(client: BillingRecord): any {
    this._storage.save('billing-records', this._records);
  }

  public getById(id: number): any {
    return this.getAll()
      .find(x => x.id === id);
  }

  public deleteAll(): any {
    this._storage.delete('billing-records');
    this._records = [];
  }

}
