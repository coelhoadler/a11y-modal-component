import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './shared/components/modal/modal.service';
import { ModalRef } from './shared/components/modal/models/model-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public title = 'a11y-p2';
  public modalRef: ModalRef;
  public selectedTemplate = null;
  public form: FormGroup;

  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['Adler', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  public show() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User data'
    });
  }

  public submit() {
    console.log('form', this.form.value);
  }

}
