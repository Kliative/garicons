import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.scss']
})
export class ChevronComponent extends BaseComponent {
  correctViewBox: string;

  @Input() chevronDirection: string;
  @Input() doubleChevron: boolean;

  constructor() {
    super();

    this.chevronDirection = this.initialiseChevronDirection(this.chevronDirection);

    this.correctViewBox = this.initialiseChevronViewBox(this.doubleChevron);
  }

  initialiseChevronDirection(chevronDirection?: string): string {
    return chevronDirection ? chevronDirection : 'right';
  }

  initialiseChevronViewBox(doubleChevron: boolean): string {
    return doubleChevron ? '0 0 13 16' : '0 0 20 16';
  }

}
