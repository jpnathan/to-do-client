import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    if (this.el.nativeElement.tagName.toLowerCase() === 'app-select') {
      this.el.nativeElement.querySelector('input').focus();
      return;
    }

    this.el.nativeElement.focus();
  }

}
