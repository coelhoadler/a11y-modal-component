import { ComponentRef } from "@angular/core";
import { ModalComponent } from "../modal.component";

export class ModalRef {

    constructor(private componentRef: ComponentRef<ModalComponent>) {
        this.componentRef = componentRef;
    }

    public close() {
        this.componentRef.destroy();
        console.log('close called');        
    }
}