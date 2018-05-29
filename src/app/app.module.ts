import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { BillingRecordFormComponent } from './billing-record-list/billing-record-form.component';
import { BillingRecordListComponent } from './billing-record-list/billing-record-list.component';
import { ClientFormComponent } from './client-list/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevComponent } from './dev/dev.component';
import { InvoiceCarouselComponent } from './invoice-list/invoice-carousel.component';
import { InvoiceDetailComponent } from './invoice-list/invoice-detail.component';
import { InvoiceFormComponent } from './invoice-list/invoice-form.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceRecordModalComponent } from './invoice-list/invoice-record-modal.component';
import { InvoiceSummaryComponent } from './invoice-list/invoice-summary.component';

import { BillingRecordDataService } from './billing-record-data/billing-record-data.service';
import { ClientDataService } from './client-data/client-data.service';
import { InvoiceDataService } from './invoice-data/invoice-data.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { InitializePipe } from './initialize/initialize.pipe';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'billing-record-list',
    component: BillingRecordListComponent
  },
  {
    path: 'client-list',
    component: ClientListComponent
  },
  { path: 'dev', component: DevComponent },
  {
    path: 'invoice-list',
    component: InvoiceListComponent,
    children: [
      { path: ':id', component: InvoiceDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    BillingRecordFormComponent,
    BillingRecordListComponent,
    ClientFormComponent,
    ClientListComponent,
    DashboardComponent,
    DevComponent,
    InvoiceCarouselComponent,
    InvoiceDetailComponent,
    InvoiceFormComponent,
    InvoiceListComponent,
    InvoiceRecordModalComponent,
    InvoiceSummaryComponent,
    InitializePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BillingRecordDataService,
    ClientDataService,
    InvoiceDataService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
