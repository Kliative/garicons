import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-thunder-storm',
  templateUrl: './thunder-storm.component.html',
  styleUrls: ['./thunder-storm.component.scss']
})
export class ThunderStormComponent extends BaseComponent {

  isRaining: boolean;


  @Input('isRaining')
  set setIsRaining(isRaining: boolean) {
    this.isRaining = isRaining;
  }

  get getIsRaining(): boolean {
    return this.isRaining;
  }

}
