import { Component } from "@angular/core";
import { ModalConfig } from "./interfaces/modal.interface";

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss']
})
export class ModalComponent { 

    public config: ModalConfig;

}