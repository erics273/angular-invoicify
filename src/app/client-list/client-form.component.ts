import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientDataService } from '../client-data/client-data.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['../layout-styles.scss', './client-form.component.scss']
})
export class ClientFormComponent {
  public name: string;

  @ViewChild(NgForm) public newClientForm: NgForm;
  @Output() public wantsClose: EventEmitter<boolean>;

  constructor(
    private _clientData: ClientDataService
  ) {
    this.wantsClose = new EventEmitter<boolean>();
  }

  public reset() {
    this.newClientForm.reset();
  }

  public addNewClient() {
    this._clientData.add(this.name, true);
    this.newClientForm.reset();
    this.wantsClose.emit(true);
  }
}
