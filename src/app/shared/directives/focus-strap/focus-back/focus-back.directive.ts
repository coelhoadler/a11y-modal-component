import { OnInit, Directive, ElementRef, OnDestroy } from "@angular/core";

@Directive({
    selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

    private lastFocusedElement: HTMLElement;

    constructor(private elementRef: ElementRef<any>) { }

    ngOnInit(): void {
        this.lastFocusedElement = document.activeElement as HTMLElement;
    }

    ngOnDestroy(): void {
        if (this.lastFocusedElement) {
            this.lastFocusedElement.focus();
        }
    }

}
