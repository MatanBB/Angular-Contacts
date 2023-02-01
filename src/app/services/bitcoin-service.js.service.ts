import { async } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datar } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }
  bitcoinRateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1';
  public async getRate(){
    return this.http.get(this.bitcoinRateUrl);
  }
  public async getChartData(url:string){
    return this.http.get<Datar>(url)
  }
}