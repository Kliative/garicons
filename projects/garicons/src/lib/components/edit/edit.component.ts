import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseComponent {
  editType: string;

  @Input('editType')
  set setEditType(editType: string) {
    this.editType = editType;
  }

  get getEditType(): string {
    return this.editType;
  }

  initialiseEditStyle(): string {
    let editType: string;
    return editType ? this.editType: '';
  }
}