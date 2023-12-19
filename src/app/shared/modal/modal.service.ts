import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "./interfaces/modal.interface";
import { ModalComponent } from "./modal.component";
import { BodyInjector } from "./services/body-injector";

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
        return new ModalRef(componentRef);
    }

    private _createComponentRef(): ComponentRef<ModalComponent> {
        return this.componentFactory.create(this.injector);
    }

}

export class ModalRef {

    constructor(private componentRef: ComponentRef<ModalComponent>) {
        this.componentRef = componentRef;
    }

    public close() {
        this.componentRef.destroy();
        console.log('close called');        
    }
}