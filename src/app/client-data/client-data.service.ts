import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Client, ClientDTO } from './client';

@Injectable()
export class ClientDataService {
  private _clients: Client[];

  constructor(
    private _storage: LocalStorageService
  ) {}

  public getAll(): Client[] {
    if (!this._clients) {
      this._clients = this._storage
        .get<Client[]>('clients', [])
        .map((x: ClientDTO) => new Client(x.id, x.name, x.active));
    }
    return [...this._clients];
  }

  public getAllActive(): Client[] {
    return this.getAll()
      .filter(x => x.active);
  }

  public add(name: string, active: boolean): any {
    const id = Math.floor(Math.random() * 100000);
    this._clients.push(new Client(id, name, active));
    this._storage.save('clients', this._clients);
  }

  public update(client: Client): any {
    this._storage.save('clients', this._clients);
  }

  public getById(id: number): any {
    return this.getAll()
      .find(x => x.id === id);
  }

  public deleteAll(): any {
    this._storage.delete('clients');
    this._clients = [];
  }

}
