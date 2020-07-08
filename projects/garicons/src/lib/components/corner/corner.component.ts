import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-corner',
  templateUrl: './corner.component.html',
  styleUrls: ['./corner.component.scss']
})
export class CornerComponent implements OnInit {
  @Input() iconColor:string;

  lineStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;


  @Input() direction: string;

  @Input() turn: string;

  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {
 
    this.lineStroke = `${this.strokeWidth}`;
    if (!this.direction) {
      this.direction = 'right';
    }
    if (!this.turn) {
      this.turn = 'down';
    }

    if (this.direction === this.turn) {
      this.direction = 'right';
      this.turn = 'down';

      console.error(`GCON ERRROR:Direction and Turn cannot be the same value, currently: Direction = ${this.direction} & Turn = ${this.turn}, shoudl be driection = 'up' & turn = 'left'`);

    }


    switch (this.animationAction) {
      case 'onload':
        this.aniOnload = true;
        break;
      case 'hover':
        this.aniHover = true;
        break;
      default:
        this.aniOnload = true;
        break;
    }

  }

}
