import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-overcast-sun',
  templateUrl: './overcast-sun.component.html',
  styleUrls: ['./overcast-sun.component.scss']
})
export class OvercastSunComponent implements OnInit {

  iconColor = 'black';
  rayStroke: string;
  cloudStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;


  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {

    this.cloudStroke = this.strokeWidth.toString();
    this.rayStroke = ((this.strokeWidth / 3) * 2).toString();

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
