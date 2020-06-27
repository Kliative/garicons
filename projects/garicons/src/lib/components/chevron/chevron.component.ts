import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.scss']
})
export class ChevronComponent implements OnInit {
  iconColor = 'black';
  
  chevronStroke: string;
  correctViewBox: string;
  @Input() animationAction: string;

  @Input() strokeWidth: number;
  @Input() chevronDirection: string;
  @Input() double: boolean;
  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {

    this.chevronStroke = this.strokeWidth.toString();

    if (!this.chevronDirection) {
      this.chevronDirection = 'right';
    }
    if (this.double) {
      this.correctViewBox = '0 0  13 16';
    } else {
      this.correctViewBox = '0 0 20 16';
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
