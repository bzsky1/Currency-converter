import { Component } from '@angular/core';
import { CurrenciesService } from '../currencies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usdRates: any;
  eurRates: any;
  inputValue1: any;
  inputValue2: any;
  currency1: string = 'EUR';
  currency2: string = 'UAH';

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

  convertInput1ToInput2() {
    let rate1 = this.getConversionRate(this.currency1);
    let rate2 = this.getConversionRate(this.currency2);

    if (this.inputValue1 !== null) {
      this.inputValue2 = (this.inputValue1 * rate1 / rate2).toFixed(2);
    } else {
      this.inputValue2 = '0';
    }
  }

  convertInput2ToInput1() {
    let rate1 = this.getConversionRate(this.currency1);
    let rate2 = this.getConversionRate(this.currency2);
  
    if (this.inputValue2 !== null) {
      this.inputValue1 = (this.inputValue2 * rate2 / rate1).toFixed(2);
    } else {
      this.inputValue1 = `0`;
    }
  }

  getConversionRate(currency: string): number {
    const conversionRates: any = {
      EUR: this.eurRates,
      USD: this.usdRates,
      UAH: 1
    };

    return conversionRates[currency];
  }
}