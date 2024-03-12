import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Methods } from '../../shared/classes/methods';

@Component({
  selector: 'xvpn-buy-service',
  templateUrl: './buy-service.component.html',
  styleUrl: './buy-service.component.css',
})
export class BuyServiceComponent {
  @ViewChild('title')
  titleElementRef!: ElementRef;
  @ViewChild('btnShared')
  btnSharedElementRef!: ElementRef;
  @ViewChild('btnPrivate')
  btnprivateElementRef!: ElementRef;
  @ViewChildren('targetElements')
  targetElements!: QueryList<ElementRef>;

  methods: Methods = new Methods();

  showPrivate(evt: Event): void {
    this.methods.showHide.showPrivate(
      evt,
      0,
      this.titleElementRef,
      this.btnSharedElementRef,
      this.targetElements
    );
  }
  showShared(evt: Event): void {
    this.methods.showHide.showShared(
      evt,
      0,
      this.titleElementRef,
      this.btnprivateElementRef,
      this.targetElements
    );
  }
}
