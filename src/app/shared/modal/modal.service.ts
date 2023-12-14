import { Injectable } from "@angular/core";
import { ModalConfig } from "./interfaces/modal.interface";

@Injectable()
export class ModalService { 

    public open(config: ModalConfig): ModalRef {
        console.log('open called', config);
        return new ModalRef();
    }

}

export class ModalRef {
    public close() {
        console.log('close called');        
    }
}