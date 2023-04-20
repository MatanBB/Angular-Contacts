import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  public loadFromLocalStorage(key:string):any {
    return localStorage.getItem(key) 
  }

  public saveToLocalStorage( key:string,data:any) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  public saveToSession( key:string,data:any) {
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  public loadFromLocalSession(key:string):any|null {
    return sessionStorage.getItem(key) 
  }

}
