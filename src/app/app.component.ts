import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/modal/modal.service';

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
