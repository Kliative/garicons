import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent extends BaseComponent {
  isCircle: boolean;
  arrowDirection: string;

  @Input('isCircle')
  set setIsCircle(isCircle: boolean) {
    this.isCircle = isCircle;
  }

  get getIsCircle(): boolean {
    return this.isCircle;
  }


  @Input('arrowDirection')
  set setArrowDirection(arrowDirection: string) {
    this.arrowDirection = arrowDirection;
  }

  get getArrowDirection(): string {
    return this.arrowDirection;
  }


  constructor() {
    super();
    this.isCircle = this.initialiseCircle(this.isCircle);
    this.arrowDirection = this.initialiseArrowDirection(this.arrowDirection);
  }

  initialiseCircle(isCircle: boolean) {
    return isCircle ? isCircle : false;
  }


  initialiseArrowDirection(arrowDirection: string) {
    return arrowDirection ? arrowDirection : 'right';
  }

}
