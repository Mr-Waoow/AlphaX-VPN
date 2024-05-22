import { ElementRef, QueryList, Renderer2 } from '@angular/core';
import { CountryProxy } from '../interfaces/country-proxy';
import { Country } from '../interfaces/country';

export class Methods {
  private renderer2!: Renderer2;
  other = {};
  openable = {
    r180: 'r-180',
    r90: 'r-90',
    active: 'active',
    renderer: this.renderer2,
    pxToRem(px: number): string {
      const remNum = (px * 0.0625).toString();
      return remNum;
    },
    getDivElement(evt: Event | undefined, elementId: string = ''): HTMLElement {
      let el: HTMLElement;
      if (elementId) {
        el = document.getElementById(elementId) as HTMLElement;
      } else {
        el = (evt?.currentTarget as HTMLElement)?.parentNode as HTMLElement;
      }
      if (!el.hasAttribute('data-height')) {
        const baseHeight = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('height')
        );
        const baseHeightRem = parseFloat(this.pxToRem(baseHeight));
        el.style.height = 'auto';
        const elHeight = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('height')
        );
        const paddingTop = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('padding-top')
        );
        const paddingBottom = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('padding-bottom')
        );
        const borderTop = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('border-top')
        );
        const borderBottom = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('border-bottom')
        );
        const marginTop = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('margin-top')
        );
        const marginBottom = parseFloat(
          window.getComputedStyle(el, null).getPropertyValue('margin-bottom')
        );
        const fullHeight =
          elHeight +
          paddingTop +
          paddingBottom +
          borderTop +
          borderBottom +
          marginTop +
          marginBottom;
        const fullHeightToRem = parseFloat(this.pxToRem(fullHeight));
        el.dataset['height'] = fullHeightToRem + 'rem';
        el.dataset['baseHeight'] = baseHeightRem + 'rem';
        el.style.height = baseHeightRem + 'rem';
      }
      return el;
    },
    openDiv(evt: Event): void {
      const el = evt.currentTarget as HTMLElement;
      const icon = el?.querySelector('.icon-sm') as HTMLElement;
      const iconAnimation = this.r180;
      if (!icon.classList.contains(iconAnimation)) {
        icon.classList.add(this.r180);
        let div1 = this.getDivElement(evt);
        setTimeout(() => {
          div1.style.height = div1.dataset['height'] ?? '';
        }, 20);
      } else {
        icon.classList.remove(this.r180);
        let div2 = this.getDivElement(evt);
        div2.style.height = div2.dataset['baseHeight'] ?? '';
      }
    },
    openDivPlus(evt: Event): void {
      const el = evt.currentTarget as HTMLElement;
      const icon = el?.querySelector('.icon-md');
      const plus = icon?.querySelector('.plus') as HTMLElement;
      const iconAnimation = this.r90;
      if (plus?.classList.contains(iconAnimation)) {
        plus?.classList.remove(this.r90);
        let div1 = this.getDivElement(evt);
        setTimeout(() => {
          div1.style.height = div1.dataset['height'] ?? '';
        }, 20);
      } else {
        plus?.classList.add(this.r90);
        let div2 = this.getDivElement(evt);
        div2.style.height = div2.dataset['baseHeight'] ?? '';
      }
    },
    openDivTarget(evt: Event, elementId: string): void {
      const btn = evt.currentTarget as HTMLElement;
      const btnIcon = btn?.querySelector('.icon-sm') as HTMLElement;
      const btnContent = btn?.querySelector('.content') as HTMLElement;
      const iconAnimation = this.r180;
      if (!btnIcon.classList.contains(iconAnimation)) {
        btnIcon.classList.add(this.r180);
        btnContent.innerHTML = 'Hide all';
        let div1 = this.getDivElement(evt, elementId);
        setTimeout(() => {
          div1.style.height = div1.dataset['height'] ?? '';
        }, 20);
      } else {
        btnIcon.classList.remove(this.r180);
        btnContent.innerHTML = 'Show all';
        let div2 = this.getDivElement(evt, elementId);
        div2.style.height = div2.dataset['baseHeight'] ?? '';
      }
    },
    openMobileTarget(evt: Event): void {
      const currentTarget = evt.currentTarget as HTMLElement;
      const element = currentTarget.parentNode as HTMLElement;
      const active = this.active;
      if (!element.classList.contains(active)) {
        element.classList.add(active);
        let div1 = this.getDivElement(evt);
        setTimeout(() => {
          div1.style.height = div1.dataset['height'] ?? '';
        }, 20);
      } else {
        element.classList.remove(active);
        let div2 = this.getDivElement(evt);
        div2.style.height = div2.dataset['baseHeight'] ?? '';
      }
    },
    openDropDown(elementId: string): void {
      const list = document.getElementById(elementId) as HTMLElement;
      const listParent = list?.parentNode as HTMLElement;
      const listIcon = listParent.querySelector('.icon-sm') as HTMLElement;
      list.style.display = 'flex';
      listIcon.classList.add(this.r180);
      let div = this.getDivElement(undefined, elementId);
      setTimeout(() => {
        div.style.height = div.dataset['height'] ?? '';
      }, 3);
    },
    closeDropDown(elementId: string): void {
      const list = document.getElementById(elementId) as HTMLElement;
      const listParent = list?.parentNode as HTMLElement;
      const listIcon = listParent.querySelector('.icon-sm') as HTMLElement;
      let div = this.getDivElement(undefined, elementId);
      div.style.height = div.dataset['baseHeight'] ?? '';
      setTimeout(() => {
        listIcon.classList.remove(this.r180);
        list.style.display = 'none';
      }, 500);
    },
  };
  showHide = {
    showPrivate(
      evt: any,
      n = 0,
      otherBtnElementRef: ElementRef,
      targetElements: QueryList<ElementRef>
    ): number {
      let i = n;
      const otherBtn = otherBtnElementRef.nativeElement;
      const currentElementsList = targetElements.toArray();

      if (i < currentElementsList.length) {
        const currentElement = currentElementsList[i].nativeElement;
        if (
          currentElement.classList.contains('shared') &&
          !currentElement.classList.contains('private')
        ) {
          currentElement.classList.add('d-none');
          i++;
          this.showPrivate(evt, i, otherBtnElementRef, targetElements);
        } else {
          currentElement.classList.remove('d-none');
          i++;
          this.showPrivate(evt, i, otherBtnElementRef, targetElements);
        }
      } else {
        otherBtn.classList.remove('active');
        evt.currentTarget.classList.add('active');
        return 0;
      }

      return 0;
    },
    showShared(
      evt: any,
      n = 0,
      otherBtnElementRef: ElementRef,
      targetElements: QueryList<ElementRef>
    ): number {
      let i = n;
      const otherBtn = otherBtnElementRef.nativeElement;
      const currentElementsList = targetElements.toArray();

      if (i < currentElementsList.length) {
        const currentElement = currentElementsList[i].nativeElement;
        if (
          currentElement.classList.contains('private') &&
          !currentElement.classList.contains('shared')
        ) {
          currentElement.classList.add('d-none');
          i++;
          this.showShared(evt, i, otherBtnElementRef, targetElements);
        } else {
          currentElement.classList.remove('d-none');
          i++;
          this.showShared(evt, i, otherBtnElementRef, targetElements);
        }
      } else {
        otherBtn.classList.remove('active');
        evt.currentTarget.classList.add('active');
        return 0;
      }

      return 0;
    },
  };
  selected = {
    removeClass(
      targetElements: QueryList<ElementRef>,
      i: number = 0,
      className: string
    ): number {
      const currentElementsList = targetElements.toArray();
      const n = currentElementsList.length;
      if (i < n) {
        const currentElement = currentElementsList[i].nativeElement;
        currentElement.classList.remove(className);
        i++;
        this.removeClass(targetElements, i, className);
      } else {
        return 0;
      }
      return 0;
    },
    selectedBtn(evt: Event, targetsBtnElementRef: QueryList<ElementRef>): void {
      this.removeClass(targetsBtnElementRef, 0, 'selected');
      const element = evt.currentTarget as HTMLElement;
      element.classList.add('selected');
    },
  };
  filter = {
    filterCountriesProxy(
      countriesProxy: CountryProxy[],
      value: string,
      isPrivate: boolean
    ): CountryProxy[] {
      return countriesProxy.filter((countryProxy) => {
        if (isPrivate) {
          return (
            countryProxy.name.toLowerCase().includes(value.toLowerCase()) &&
            countryProxy.isPrivate
          );
        } else {
          return (
            countryProxy.name.toLowerCase().includes(value.toLowerCase()) &&
            countryProxy.isShared
          );
        }
      });
    },
    filterCountries(countries: Country[], value: string): any[] {
      return countries.filter((country) => {
        return country.name.toLowerCase().includes(value.toLowerCase());
      });
    },
  };
}
