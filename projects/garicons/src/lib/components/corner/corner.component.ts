import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-corner',
  templateUrl: './corner.component.html',
  styleUrls: ['./corner.component.scss']
})
export class CornerComponent extends BaseComponent {

  @Input() direction: string;

  @Input() turn: string;


  constructor() {
    super();
    this.initialiseDirectionAndTurn(this.direction, this.turn);
  }

  initialiseDirectionAndTurn(direction: string, turn: string): void {
    if (!direction) {
      this.direction = 'right';
    }
    if (!turn) {
      this.turn = 'down';
    }

    if (direction === turn) {
      this.direction = 'right';
      this.turn = 'down';

      console.error(`GCON ERRROR:Direction and Turn cannot be the same value, currently: Direction = ${this.direction} & Turn = ${this.turn}, shoudl be driection = 'up' & turn = 'left'`);

    }
  }
}
