import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-minimize',
  templateUrl: './minimize.component.html',
  styleUrls: ['./minimize.component.scss']
})
export class MinimizeComponent implements OnInit {
  @Input() iconColor:string;

  lineStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;


  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {
   
    this.lineStroke = `${this.strokeWidth}`;

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
