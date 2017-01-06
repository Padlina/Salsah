import {Directive, ElementRef, Renderer, HostListener, NgZone, OnInit} from '@angular/core';

@Directive({
    selector: '[salsahCenterElement]'
})
export class CenterElementDirective implements OnInit {


    constructor(private el: ElementRef, private renderer: Renderer, private ngZone: NgZone) {
        window.onresize = (e) => {
            ngZone.run(() => {
                this.centering();
            });
        };


    }


    ngOnInit() {
        this.centering();
    }


    private centering() {
        let posTopVal: number = Math.round(((window.innerHeight - this.el.nativeElement.offsetHeight) / 2 )); //5 * 3));
        let posLeftVal: number = Math.round(((window.innerWidth - this.el.nativeElement.offsetWidth) / 2 ));

        let posTop: string = Math.max(75, posTopVal) + 'px';
        let posLeft: string = Math.max(0, posLeftVal) + 'px';

        this.renderer.setElementStyle(this.el.nativeElement, 'top', posTop);
        this.renderer.setElementStyle(this.el.nativeElement, 'left', posLeft);
    }
}

