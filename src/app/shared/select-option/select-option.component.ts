import { Component, ElementRef, ViewChild } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.css',
})
export class SelectOptionComponent {
  //Select Elements
  @ViewChild('select-list') btnSelectListElementRef!: ElementRef;
  //Icons
  faCaretDown = faCaretDown;
  //
  btnSelectList = this.btnSelectListElementRef.nativeElement;
  openSelect(): void {}
}
