import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client-data/client';
import { ClientDataService } from '../client-data/client-data.service';
import { ClientFormComponent } from './client-form.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['../layout-styles.scss', './client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  private _clients: Client[];
  private _showChild: boolean;
  @ViewChild(ClientFormComponent) private _form: ClientFormComponent;

  constructor(
    private _clientData: ClientDataService
  ) {}

  public ngOnInit() {
    this._clients = this._clientData.getAll();
  }

  public showNewClientForm() {
    this._form.reset();
    this._showChild = true;
  }

  public hideNewClientForm() {
    this._showChild = false;
    this._clients = this._clientData.getAll();
  }

  public updateStatus(id: number, active: boolean) {
    const client = this._clientData.getById(id);
    if (active) {
      client.activate();
    } else {
      client.deactivate();
    }
    this._clientData.update(client);
  }

  public get clients() { return this._clients; }
  public get showChild() { return this._showChild; }
}
