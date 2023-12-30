import { NgModule } from "@angular/core";
import { ModalService } from "./modal.service";
import { ModalComponent } from "./modal.component";
import { CommonModule } from "@angular/common";
import { FocusStrapModule } from "../../directives/focus-strap/focus-strap.module";
import { FocusBackModule } from "../../directives/focus-strap/focus-back/focus-back.module";

@NgModule({
    declarations: [ ModalComponent ],
    exports: [ ModalComponent ],
    imports: [ CommonModule, FocusStrapModule, FocusBackModule ],
    providers: [ ModalService ]
})
export class ModalModule { }