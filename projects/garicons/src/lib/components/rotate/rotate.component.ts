import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss']
})
export class RotateComponent extends BaseComponent implements OnInit {


  rotateClockWise: boolean;

  @Input('rotateClockWise')
  set setRotateClockWise(rotateClockWise: boolean) {
    this.rotateClockWise = rotateClockWise;
  }

  get getRotateClockWise(): boolean {
    return this.rotateClockWise;
  }

  ngOnInit(): void {
    this.rotateClockWise = this.initialiseRotationDirection(this.rotateClockWise);
  }

  initialiseRotationDirection(rotateClockWise?: boolean): boolean {
    return rotateClockWise === null || rotateClockWise === undefined ? true : false;
  }

}
