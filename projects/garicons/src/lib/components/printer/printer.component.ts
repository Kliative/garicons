import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gcon-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {
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
