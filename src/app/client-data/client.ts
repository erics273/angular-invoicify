export interface ClientDTO {
  id: number;
  name: string;
  active: boolean;
}

export class Client {
  [key: string]: any;

  /* START SOLUTION */
  private _data: ClientDTO;

  constructor(
    id: number,
    name: string,
    active = false
  ) {
    this._data = { id, name, active };
  }

  public toJSON() {
    return this._data;
  }

  public activate() { this._data.active = true; }
  public deactivate() { this._data.active = false; }

  public get id() { return this._data.id; }
  public get name() { return this._data.name; }
  public get active() { return this._data.active; }
  /* ELSE
  // Start uncommenting each test in the client.spec.ts file, one-by-one,
  // and make each test pass before you continue to the next one.
  END SOLUTION */
}
