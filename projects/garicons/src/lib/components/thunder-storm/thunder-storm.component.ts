import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-thunder-storm',
  templateUrl: './thunder-storm.component.html',
  styleUrls: ['./thunder-storm.component.scss']
})
export class ThunderStormComponent implements OnInit {

  @Input() iconColor:string;
  rainStroke: string;
  cloudStroke: string;
  lightningStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;
  @Input() color: string;
  @Input() isRaining: boolean;

  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {

   

    this.cloudStroke = this.lightningStroke = this.strokeWidth.toString();
    this.rainStroke = (this.strokeWidth / 2).toString();

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
