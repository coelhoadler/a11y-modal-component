import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './shared/components/modal/modal.service';
import { ModalRef } from './shared/components/modal/models/model-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title = 'a11y-p2';
  public firstName = 'Adler';
  public surname = 'Coelho Santos';
  public age = 30;
  public modalRef: ModalRef;
  public selectedTemplate = null;

  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  constructor(
    private modalService: ModalService
  ) { }

  public show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User data'
    });
  }

}
