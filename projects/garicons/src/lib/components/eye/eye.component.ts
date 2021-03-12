import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.scss']
})
export class EyeComponent extends BaseComponent {
  eyeOff: boolean;

  @Input('eyeOff')
  set setEditType(eyeOff: boolean) {
    this.eyeOff = eyeOff;
  }

  get getEditType(): boolean {
    return this.eyeOff;
  }

  initialiseEditStyle(): boolean {
    let eyeOff: boolean;
    return eyeOff;
  }
}
