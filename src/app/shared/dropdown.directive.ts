import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{

    @HostBinding('class.open') isOpen = false;  //we need to give a methis isOpen and in () we need to mention to which property we need to bind the value of the method isOpen

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
    constructor(private elRef: ElementRef) {
        
    }
}