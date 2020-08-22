import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.scss']
})
export class BellComponent extends BaseComponent {

  isDisabled: boolean;

  @Input('isDisabled')
  set setIsDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  get getIsDisabled(): boolean {
    return this.isDisabled;
  }

  constructor() {
    super();
    this.isDisabled = this.initialiseCharging(this.isDisabled);
  }

  initialiseCharging(isDisabled: boolean): boolean {
    return isDisabled ? isDisabled : false;
  }
}