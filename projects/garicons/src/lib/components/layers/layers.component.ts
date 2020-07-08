import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent implements OnInit {
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
