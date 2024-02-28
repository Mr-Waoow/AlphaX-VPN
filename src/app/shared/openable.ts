import { Renderer2 } from "@angular/core";

export class Openable {
  private r180 = 'r-180';
  private r90 = 'r-90';
  private renderer!: Renderer2;
  private pxToRem(px: number): string {
    const remNum = (px * 0.0625).toString();
    return remNum;
  }
  getDivElement(evt: Event, elementId: string = ''): HTMLElement {
    let el: HTMLElement;
    if (elementId) {
      el = document.getElementById(elementId) as HTMLElement;
    } else {
      el = (evt.currentTarget as HTMLElement)?.parentNode as HTMLElement;
    }
    if (!el.hasAttribute('data-height')) {
      const baseHeight = parseFloat(
        window.getComputedStyle(el, null).getPropertyValue('height')
      );
      const baseHeightRem = parseFloat(this.pxToRem(baseHeight));
      this.renderer?.setStyle(el, 'height', 'auto');
      const elHeight = el.scrollHeight;
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
      const fullHeightToRem = parseFloat(this.pxToRem(fullHeight)) - 2;
      el.dataset['height'] = `${(fullHeightToRem)}rem`;
      el.dataset['baseHeight'] = `${baseHeightRem}rem`;
      this.renderer?.setStyle(el, 'height', `${baseHeightRem}rem`);
    }
    return el;
  }
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
  }
  openDivPlus(evt: Event): void {
    const el = evt.currentTarget as HTMLElement;
    const icon = el?.querySelector('.icon-md');
    const plus = icon?.querySelector('.plus') as HTMLElement;
    const iconAnimation = this.r90;
    if (plus?.classList.contains(iconAnimation)) {
      plus?.classList.remove(this.r90);
      let div1 = this.getDivElement(evt);
      setTimeout(() => {
        div1.style.height = (div1.dataset['height']) ?? '';
      }, 20);
    } else {
      plus?.classList.add(this.r90);
      let div2 = this.getDivElement(evt);
      div2.style.height = div2.dataset['baseHeight'] ?? '';
    }
  }
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
  }
}
