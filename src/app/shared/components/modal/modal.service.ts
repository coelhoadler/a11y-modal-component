import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "./interfaces/modal.interface";
import { ModalComponent } from "./modal.component";
import { BodyInjector } from "./services/body-injector";
import { ModalRef } from "./models/model-ref";

@Injectable()
export class ModalService {

    private componentFactory: ComponentFactory<ModalComponent>;

    constructor(
        componentactoryResolver: ComponentFactoryResolver, 
        private injector: Injector,
        private bodyInjector: BodyInjector
    ) { 
        this.componentFactory = componentactoryResolver.resolveComponentFactory(ModalComponent);
    }

    public open(config: ModalConfig): ModalRef {
        const componentRef = this._createComponentRef();
        componentRef.instance.config = config;
        
        this.bodyInjector.stackBeforeAppRoot(componentRef);
        const modalRef = new ModalRef(componentRef);
        componentRef.instance.modalRef = modalRef;
        return modalRef;
    }

    private _createComponentRef(): ComponentRef<ModalComponent> {
        return this.componentFactory.create(this.injector);
    }

}
