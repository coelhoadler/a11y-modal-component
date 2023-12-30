import { NgModule } from "@angular/core";
import { FocusStrapDirective } from "./focus-strap.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ FocusStrapDirective ],
    imports: [ CommonModule ],
    exports: [ FocusStrapDirective ]
})
export class FocusStrapModule { }