import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BillingRecord } from '../billing-record-data/billing-record';

@Component({
  selector: 'app-invoice-record-modal',
  templateUrl: './invoice-record-modal.component.html',
  styleUrls: ['../layout-styles.scss', './invoice-record-modal.component.scss']
})
export class InvoiceRecordModalComponent {
  private _selectedRecords: BillingRecord[];
  @Input() public availableRecords: BillingRecord[];
  @Output() public dismissed: EventEmitter<void>;
  @Output() public submitted: EventEmitter<BillingRecord[]>;

  constructor() {
    this._selectedRecords = [];
    this.dismissed = new EventEmitter<void>();
    this.submitted = new EventEmitter<BillingRecord[]>();
  }

  public dismiss() {
    this.dismissed.next();
  }

  public submit() {
    this.submitted.next(this._selectedRecords);
  }

  public update(record: BillingRecord, add: boolean) {
    if (add) {
      this._selectedRecords.push(record);
    } else {
      this._selectedRecords = this._selectedRecords.filter(x => x !== record);
    }
  }
}
