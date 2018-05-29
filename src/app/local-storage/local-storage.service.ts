import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  public get<T>(key: string, missing: T): T {
    const content = window.localStorage.getItem(key);
    if (content) {
      return JSON.parse(content);
    }
    return missing;
  }

  public save(key: string, payload: any) {
    const json = JSON.stringify(payload);
    window.localStorage.setItem(key, json);
  }

  public delete(key: string) {
    window.localStorage.removeItem(key);
  }
}
