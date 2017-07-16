import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppDirective]'
})
export class AppDirectiveDirective {

 constructor(private element: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.hover('showContent');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('');
  }

  hover(state: string) {
      this.element.nativeElement.className = state;
  }

}
