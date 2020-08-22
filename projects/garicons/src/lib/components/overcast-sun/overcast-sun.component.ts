import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-overcast-sun',
  templateUrl: './overcast-sun.component.html',
  styleUrls: ['./overcast-sun.component.scss']
})
export class OvercastSunComponent extends BaseComponent {

  rayStroke: string;

  constructor() {
    super();
    this.rayStroke = ((parseInt(this.lineStroke, 2) / 3) * 2).toString();
  }

}
