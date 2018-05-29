// import { Client } from '../client-data/client';
// import { BillingRecord } from './billing-record';

describe(`Billing Record`, () => {

  /*
  let client: Client;

  beforeEach(() => {
    client = new Client(1, 'Barry\'s Meat Market');
  });

  it(`should have a constructor that takes an id, a rate, an amount,
     a client, a descirption, and an optional flag to specify if it's
     been invoiced.`, () => {
    expect(() => new BillingRecord(1, 1, 1, client, 'recordio')).not.toThrow();
    expect(() => new BillingRecord(1, 1, 1, client, 'recordio', true)).not.toThrow();
  });
  */

  /*
  it(`should have a toJSON method that returns a BillingRecordDTO`, () => {
    const record = new BillingRecord(1, 1, 1, client, 'recordio', true);
    const jsonObject = record.toJSON();
    expect(jsonObject.id).toBe(1);
    expect(jsonObject.rate).toBe(1);
    expect(jsonObject.amount).toBe(1);
    expect(jsonObject.clientId).toBe(client.id);
    expect(jsonObject.description).toBe('recordio');
    expect(jsonObject.invoiced).toBeTruthy();
  });
  */

  /*
  it (`should have a total getter that returns the product of the rate and amount`, () => {
    const record = new BillingRecord(1, 2, 9, client, 'recordio', true);
    expect(record.total).toBe(18);
  });
  */

  /*
  it(`should have getters for all properties`, () => {
    const record = new BillingRecord(2, 3, 4, client, 'grondar', false);
    expect(record.id).toBe(2);
    expect(record.rate).toBe(3);
    expect(record.amount).toBe(4);
    expect(record.client).toBe(client);
    expect(record.description).toBe('grondar');
    expect(record.invoiced).toBeFalsy();
  });
  */

  /*
  it(`should have a setter for the invoiced property`, () => {
    const record = new BillingRecord(2, 3, 4, client, 'grondar', false);
    record.invoiced = true;
    expect(record.invoiced).toBeTruthy();
    record.invoiced = false;
    expect(record.invoiced).toBeFalsy();
  });
  */

  /*
  it(`should generate a random number for its id when 0 is passed into the constructor`, () => {
    const record = new BillingRecord(0, 3, 4, client, 'grondar', false);
    expect(record.id).toBeGreaterThan(0);
    const record2 = new BillingRecord(0, 3, 4, client, 'grondar', false);
    expect(record2.id).toBeGreaterThan(0);
    expect(record.id).not.toBe(record2.id);
  });
  */

});
