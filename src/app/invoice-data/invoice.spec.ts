// import { Client } from '../client-data/client';
// import { BillingRecord } from '../billing-record-data/billing-record';
// import { Invoice } from './invoice';

describe(`Invoice`, () => {

  /*
  let client: Client;
  let records: BillingRecord[];
  let fromDate: Date;
  let toDate: Date;

  beforeEach(() => {
    client = new Client(0, 'Mariachi Unlimited', true);
    records = [
      new BillingRecord(0, 2, 25, client, 'Faxes'),
      new BillingRecord(0, 150, 1, client, 'Meeting')
    ];
    fromDate = new Date(2010, 1, 1);
    toDate = new Date(2010, 2, 1);
  });

  it(`should have a constructor that takes an invoice number string, a from
      billing date, a to billing date, any existing records, and a client`, () => {
    expect(() => new Invoice('INV-1', fromDate, toDate, records, client)).not.toThrow();
    expect(() => new Invoice('INV-2', fromDate, toDate, [], client)).not.toThrow();
  });
  */

  /*
  it(`should have a toJSON method that returns an InvoiceDTO`, () => {
    const invoice = new Invoice('INV-1', fromDate, toDate, records, client);

    const jsonObject = invoice.toJSON();

    expect(jsonObject.id).toBe('INV-1');
    expect(jsonObject.billingFrom).toBe(fromDate.valueOf());
    expect(jsonObject.billingTo).toBe(toDate.valueOf());
    expect(jsonObject.clientId).toBe(client.id);
    expect(jsonObject.recordIds.length).toBe(2);
    expect(jsonObject.recordIds).toContain(records[0].id);
    expect(jsonObject.recordIds).toContain(records[1].id);
    expect(invoice.closed).toBeFalsy();
    expect(invoice.paid).toBeFalsy();
  });
  */

  /*
  it(`should have getters for number, client name, client, billing from,
      billing to, billing records, a closed flag, and a paid flag.`, () => {
    const invoice = new Invoice('INV-1', fromDate, toDate, records, client);

    expect(invoice.number).toBe('INV-1');
    expect(invoice.billingFrom.valueOf()).toBe(fromDate.valueOf());
    expect(invoice.billingTo.valueOf()).toBe(toDate.valueOf());
    expect(invoice.client).toBe(client);
    expect(invoice.clientName).toBe(client.name);
    expect(invoice.records).toBe(records);
    expect(invoice.closed).toBeFalsy();
    expect(invoice.paid).toBeFalsy();
  });
  */

  /*
  it(`should have an addRecord method that adds a billing record to the invoice
      and marks the billing record as invoiced`, () => {
    const invoice = new Invoice('INV-1', fromDate, toDate, [], client);
    expect(records[0].invoiced).toBeFalsy();

    invoice.addRecord(records[0]);

    expect(records[0].invoiced).toBeTruthy();
    expect(invoice.records).toContain(records[0]);
  });
  */

  /*
  it(`should have a total getter that returns the sum of the records' totals`, () => {
    const invoice = new Invoice('INV-1', fromDate, toDate, records, client);

    const total = invoice.total;

    expect(total).toBe(200);
  });
  */

  /*
  it(`should have a close method that sets the closed date fot he invoice`, () => {
    let invoice = new Invoice('INV-1', fromDate, toDate, records, client);
    invoice.close();
    expect(invoice.closed).toBeTruthy();

    invoice = new Invoice('INV-1', fromDate, toDate, records, client);
    invoice.close(fromDate.valueOf());
    expect(invoice.closed).toBeTruthy();
  });
  */

  /*
  it(`should have a pay method that sets the paid date fot he invoice`, () => {
    let invoice = new Invoice('INV-1', fromDate, toDate, records, client);
    invoice.pay();
    expect(invoice.paid).toBeTruthy();

    invoice = new Invoice('INV-1', fromDate, toDate, records, client);
    invoice.pay(fromDate.valueOf());
    expect(invoice.paid).toBeTruthy();
  });
  */

});
