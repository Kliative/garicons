import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent extends BaseComponent {

  isCharging: boolean;

  @Input('isCharging')
  set setIsCharging(isCharging: boolean) {
    this.isCharging = isCharging;
  }

  get getIsBatChartAlt(): boolean {
    return this.isCharging;
  }

  constructor() {
    super();
    this.isCharging = this.initialiseCharging(this.isCharging);
  }

  initialiseCharging(isCharging: boolean): boolean {
    return isCharging ? isCharging : false;
  }
}
