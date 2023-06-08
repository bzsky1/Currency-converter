import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrenciesService {
  
  constructor(
    private http: HttpClient,
  ) {
  }

  KEY = `9fe0d0335eb05a86b0dcfdbc`;

  getUSDExchangeRate() {
    return this.http.get(`https://v6.exchangerate-api.com/v6/9fe0d0335eb05a86b0dcfdbc/latest/USD`);
  }

  getEURExchangeRate() {
    return this.http.get(`https://v6.exchangerate-api.com/v6/9fe0d0335eb05a86b0dcfdbc/latest/EUR`);
  }

}

