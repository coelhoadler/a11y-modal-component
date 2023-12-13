import { Injectable, TemplateRef } from "@angular/core";

@Injectable()
export class ModalService { 

    public open(templateRef: ModalConfig): ModalRef {
        console.log('open called', templateRef);
        return new ModalRef();
        
    }

}

export interface ModalConfig {
    templateRef: TemplateRef<any>;
    title: string;
}

export class ModalRef {
    public close() {
        console.log('close called');
        
    }
}