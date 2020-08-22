import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent extends BaseComponent {

  alertBoarderShape: string;

  @Input('shape')
  set setAlertBoarderShape(shape: string) {
    this.alertBoarderShape = shape;
  }

  get getAlertBoarderShape(): string {
    return this.alertBoarderShape;
  }

  constructor() {
    super();
    this.alertBoarderShape = this.initialiseBoarderShape(this.alertBoarderShape);
  }

  initialiseBoarderShape(alertBoarderShape: string): string {
    return alertBoarderShape ? alertBoarderShape : 'circle';
  }
}