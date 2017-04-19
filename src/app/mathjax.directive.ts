import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

declare var MathJax: {
    Hub: {
        Queue: (param: Object[]) => void;
    }
};
@Directive({selector: '[mathJax]'})
export class MJDirective implements OnChanges {
    @Input("mathJax") private value: string = "";
    constructor(private element: ElementRef) {}

    ngOnChanges() {
        console.log("MJDirective on change");
        this.element.nativeElement.innerHTML = this.value;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement]);
    }
}
