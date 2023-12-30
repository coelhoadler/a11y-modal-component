import { NgModule } from "@angular/core";
import { ModalService } from "./modal.service";
import { ModalComponent } from "./modal.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ ModalComponent ],
    exports: [ ModalComponent ],
    imports: [ CommonModule ],
    providers: [ ModalService ]
})
export class ModalModule { }