import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-heavy-rain',
  templateUrl: './heavy-rain.component.html',
  styleUrls: ['./heavy-rain.component.scss']
})
export class HeavyRainComponent extends BaseComponent {


  rainStroke: string;


  constructor() {
    super();
    this.rainStroke = ((parseInt(this.lineStroke, 2) / 3) / 2).toString();

  }

}
