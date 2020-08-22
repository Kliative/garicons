import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent extends BaseComponent {


  rainStroke: string;

  constructor() {
    super();
    this.rainStroke = (parseInt(this.lineStroke, 2) / 2).toString();

  }

}
