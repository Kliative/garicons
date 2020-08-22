import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent extends BaseComponent implements OnInit {


  ngOnInit(): void {
    this.lineStroke = this.initialiseLineStrokePrinter(this.strokeWidth);
  }

  initialiseLineStrokePrinter(strokeWidth?: number): string {
    return strokeWidth ? `${strokeWidth * .45 }` : '1.5';
  }
}
