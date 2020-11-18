import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent extends BaseComponent {
  checkStyle: string;
  showSmallCheckTick: boolean;
  @Input('checkStyle')
  set setCheckStyle(checkStyleStr: string) {
    this.checkStyle = checkStyleStr;

  }

  get getCheckStyle(): string {
    return this.checkStyle;
  }
  constructor() {
    super();
    this.checkStyle = this.initialiseCheckStyle(this.checkStyle);
  }

  initialiseCheckStyle(initialiseCheckStyle: string): string {
    let chckStl: string;

    switch (initialiseCheckStyle) {
      case 'circle':
        chckStl = initialiseCheckStyle;
        break;
      case 'square':
        chckStl = initialiseCheckStyle;
        break;
      default:
        chckStl = '';
        break;
    }

    return chckStl;

  }
}