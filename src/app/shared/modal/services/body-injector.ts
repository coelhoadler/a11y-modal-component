import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BodyInjector {

    constructor(private appRef: ApplicationRef) {}

    public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
        const domElement = this.createDomElement(componentRef);
        console.log('>>> domELement', domElement);
        const appRoot = document.body.querySelector('app-root');
        document.body.insertBefore(domElement, appRoot);
    }

    private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
        this.appRef.attachView(componentRef.hostView);
        const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        return domElement;
    }

}