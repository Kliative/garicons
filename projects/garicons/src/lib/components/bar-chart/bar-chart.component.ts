import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent extends BaseComponent {

  isBarChartAlt: boolean;

  @Input('isBarChartAlt')
  set setIsBatChartAlt(isBatChartAlt: boolean) {
    this.isBarChartAlt = isBatChartAlt;

  }

  get getIsBatChartAlt(): boolean {
    return this.isBarChartAlt;
  }

  constructor() {
    super();
    this.isBarChartAlt = this.initialiseBarChart(this.isBarChartAlt);
  }

  initialiseBarChart(initialiseBarChart: boolean): boolean {
    return initialiseBarChart ? initialiseBarChart : false;
  }
}
