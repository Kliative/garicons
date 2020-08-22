import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-overcast',
  templateUrl: './overcast.component.html',
  styleUrls: ['./overcast.component.scss']
})
export class OvercastComponent extends BaseComponent {

  cloudStrokeMain: string;
  cloudStrokeFront: string;
  cloudStrokeRear: string;
  cloudStrokeSide: string;

  constructor() {
    super();
    this.assignCLoudStrokeWidth(parseInt(this.lineStroke, 2) / 3);
  }
  assignCLoudStrokeWidth(strkWidth: number): void {

    const strkWidthFraction = (strkWidth / 4);

    this.cloudStrokeMain = strkWidth.toString();
    this.cloudStrokeFront = (strkWidthFraction * 4).toString();
    this.cloudStrokeRear = (strkWidthFraction * 2).toString();
    this.cloudStrokeSide = (strkWidthFraction * 3).toString();
  }
}
