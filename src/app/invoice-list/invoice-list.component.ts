import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BillingRecordDataService } from '../billing-record-data/billing-record-data.service';
import { Invoice } from '../invoice-data/invoice';
import { InvoiceDataService } from '../invoice-data/invoice-data.service';
import { ClientDataService } from '../client-data/client-data.service';
import { InvoiceFormComponent } from './invoice-form.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['../layout-styles.scss', './invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  private _openRecordCount: number;
  private _activeClientCount: number;
  private _showChild: boolean;
  private _invoices: Invoice[];
  private _selectedInvoice: Invoice;
  @ViewChild(InvoiceFormComponent) private _form: InvoiceFormComponent;

  constructor(
    private _billingData: BillingRecordDataService,
    private _invoiceData: InvoiceDataService,
    private _clientData: ClientDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._invoices = [];
  }

  public ngOnInit(): void {
    this._route.snapshot.children.forEach((x: ActivatedRouteSnapshot) => {
      const invoice = this._invoiceData.getByNumber(x.params.id);
      this._selectedInvoice = invoice;
    });
    this._openRecordCount = this._billingData
      .getAll()
      .filter(x => !x.invoiced)
      .length;
    this._invoices = this._invoiceData
      .getAll()
      .filter(x => !x.paid);
    this._activeClientCount = this._clientData
      .getAllActive()
      .length;
  }

  public selectInvoice(invoice: Invoice, event: Event) {
    if (!event.defaultPrevented) {
      if (this._selectedInvoice === invoice || !invoice) {
        this._router.navigate(['invoice-list']);
        this._selectedInvoice = undefined;
      } else {
        this._router.navigate(['invoice-list', invoice.number]);
        this._selectedInvoice = invoice;
      }
    }
    if (invoice) {
      event.preventDefault();
    }
  }

  public showNewInvoiceForm() {
    this._form.reset();
    this._showChild = true;
  }

  public hideNewInvoiceForm() {
    this._showChild = false;
    this._invoices = this._invoiceData
      .getAll()
      .filter(x => !x.paid);
  }

  public get openRecordCount() { return this._openRecordCount; }
  public get showChild() { return this._showChild; }
  public get invoices() { return this._invoices; }
  public get activeClientCount() { return this._activeClientCount; }
  public get selectedInvoice() { return this._selectedInvoice; }

}
