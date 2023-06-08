import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  usdRates: any;
  eurRates: any;

  constructor(private currenciesService: CurrenciesService) {
  }

  ngOnInit(): void {
    this.currenciesService.getUSDExchangeRate()
    .subscribe((response: any) => {
      this.usdRates = this.getCurrencyValue(response);
    });

    this.currenciesService.getEURExchangeRate()
    .subscribe((response: any) => {
      this.eurRates = this.getCurrencyValue(response);
    });
  }

  getCurrencyValue(response: any) {
    return Number(response.conversion_rates.UAH).toFixed(2);
  }
}
