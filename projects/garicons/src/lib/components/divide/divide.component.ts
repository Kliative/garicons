import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.scss']
})
export class DivideComponent extends BaseComponent {

  divideBoarderShape: string;

  @Input('shape')
  set setDivideBoarderShape(shape: string) {
    this.divideBoarderShape = shape;
  }

  get getDivideBoarderShape(): string {
    return this.divideBoarderShape;
  }

  constructor() {
    super();
    this.divideBoarderShape = this.initialiseBoarderShape(this.divideBoarderShape);
  }

  initialiseBoarderShape(divideBoarderShape: string): string {
    return divideBoarderShape ? divideBoarderShape : 'circle';
  }
}