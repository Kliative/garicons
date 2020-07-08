import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-overcast',
  templateUrl: './overcast.component.html',
  styleUrls: ['./overcast.component.scss']
})
export class OvercastComponent  implements OnInit {

  @Input() iconColor:string;
  rayStroke: string;

  cloudStroke: string;
  cloudStrokeMain: string;
  cloudStrokeFront: string;
  cloudStrokeRear: string;
  cloudStrokeSide: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;


  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {

   

    this.assignCLoudStrokeWidth(this.strokeWidth);



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
  assignCLoudStrokeWidth(strkWidth: number): void {

    const strkWidthFraction = (strkWidth / 4);

    this.cloudStrokeMain = strkWidth.toString();
    this.cloudStrokeFront = (strkWidthFraction * 4).toString();
    this.cloudStrokeRear = (strkWidthFraction * 2).toString();
    this.cloudStrokeSide = (strkWidthFraction * 3).toString();
  }
}
