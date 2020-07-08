import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-heavy-rain',
  templateUrl: './heavy-rain.component.html',
  styleUrls: ['./heavy-rain.component.scss']
})
export class HeavyRainComponent implements OnInit {

  @Input() iconColor:string;
  rainStroke: string;
  cloudStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;


  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {
   

    this.cloudStroke = this.strokeWidth.toString();
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
