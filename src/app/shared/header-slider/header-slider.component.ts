import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'xvpn-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrl: './header-slider.component.css',
})
export class HeaderSliderComponent implements AfterViewInit {
  showText = false; // Initially hide the text
  showText1 = false; // Initially hide the text
  showText2 = false; // Initially hide the text
  showText3 = false; // Initially hide the text
  showText4 = false; // Initially hide the text
  showText5 = false; // Initially hide the text
  showText6 = false; // Initially hide the text

  ngAfterViewInit() {
    // Ensure element and styles are loaded before displaying
    setTimeout(() => {
      this.showText = true;
    }, 1000); // Short delay to allow loading (adjust as needed)
    setTimeout(() => {
      this.showText1 = true;
    }, 2000); // Short delay to allow loading (adjust as needed)
    setTimeout(() => {
      this.showText2 = true;
    }, 2800); // Short delay to allow loading (adjust as needed)
    setTimeout(() => {
      this.showText3 = true;
    }, 3600); // Short delay to allow loading (adjust as needed)
    setTimeout(() => {
      this.showText4 = true;
    }, 4400); // Short delay to allow loading (adjust as needed)
    setTimeout(() => {
      this.showText5 = true;
    }, 5200); // Short delay to allow loading (adjust as needed)
    setTimeout(() => {
      this.showText6 = true;
    }, 6000); // Short delay to allow loading (adjust as needed)
  }
}
