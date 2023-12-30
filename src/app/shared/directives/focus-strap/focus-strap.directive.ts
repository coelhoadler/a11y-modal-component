import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appFocusStrap]'
})
export class FocusStrapDirective implements AfterViewInit {

    private firstFocusableElement: HTMLElement = null;
    private lastFocusableElement: HTMLElement = null;

    constructor(private elementRef: ElementRef<any>) { }

    ngAfterViewInit(): void {
        console.log('>>> carregando')
        // seletor que pega todos os elementos que podem pegar o focus()
        const focusableElements = this.elementRef
        .nativeElement
        .querySelectorAll(`
            [tabindex]:not([tabindex="-1"]),
            a[href]:not([disabled]),
            button:not([disabled]),
            textarea:not([disabled]),
            input:not([disabled]),
            select:not([disabled])`
        ) as Array<HTMLElement>;

        console.log('elements >>> ', focusableElements)

        this.firstFocusableElement = focusableElements[0];
        this.lastFocusableElement = focusableElements[focusableElements.length - 1];
        this.firstFocusableElement.focus();

        console.log('first', this.firstFocusableElement)
        console.log('last', this.lastFocusableElement)
    }

    @HostListener('keydown', ['$event'])
    public manageTab(event: KeyboardEvent): void {
        if (event.key !== 'Tab') {
            return;
        }

        if (event.shiftKey && document.activeElement === this.firstFocusableElement) {
            this.lastFocusableElement.focus();
            event.preventDefault();
        } else if(document.activeElement === this.lastFocusableElement) {
            this.firstFocusableElement.focus();
            event.preventDefault();
        }
    }

}
