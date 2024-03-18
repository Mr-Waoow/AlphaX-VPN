import { Directive, ElementRef, Input } from '@angular/core';
import { CountryProxy } from '../interfaces/country-proxy';

@Directive({
  selector: '[xvpnDataCountryProxy]',
})
export class DataCountryProxyDirective {
  @Input('xvpnDataCountryProxy') dataCountryProxy: CountryProxy | undefined;

  constructor(private el: ElementRef) {
    // Store data on the element as a custom attribute:
    this.el.nativeElement.setAttribute(
      'data-country-proxy',
      JSON.stringify(this.dataCountryProxy)
    );
  }
}
