import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[animationView]'
})
export class AnimationDirective {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor(
    private el: ElementRef,
  ) { }
  @HostListener('window:scroll', ['$event']) onEnter(e) {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset;
    if (scrollPosition + this.el.nativeElement.offsetHeight >= componentPosition - this.el.nativeElement.offsetHeight) {
      this.onChange.emit('show')
    } else {
      this.onChange.emit('hide')
    }
  }

}
