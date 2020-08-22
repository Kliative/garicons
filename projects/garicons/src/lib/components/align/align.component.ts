import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-align',
  templateUrl: './align.component.html',
  styleUrls: ['./align.component.scss']
})
export class AlignComponent extends BaseComponent {
  align: string;

  @Input('align')
  set setAlign(align: string) {
    this.align = align;
  }

  get getAlign(): string {
    return this.align;
  }

  constructor() {
    super();
    this.align = this.initialiseAlignment(this.align);
  }

  initialiseAlignment(align: string): string {
    return align ? align : 'justify';
  }

}
