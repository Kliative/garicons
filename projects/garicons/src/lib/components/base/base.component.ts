import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'garicon-base',
  template: ``,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnChanges {

  animationAction: string;
  strokeWidth: number;
  iconColor: string;
  dimension: number;

  @Input('iconColor')
  set setIconColor(iconColor: string) {
    this.iconColor = iconColor;
  }

  get getIconColor(): string {
    return this.iconColor;
  }


  @Input('dimension')
  set setDimension(dimension: number) {
    this.dimension = dimension;
  }

  get getDimension(): number {
    return this.dimension;
  }


  @Input('animationAction')
  set setAnimationAction(animationAction: string) {
    this.animationAction = animationAction;
  }

  get getAnimationAction(): string {
    return this.animationAction;
  }


  @Input('strokeWidth')
  set setStrokeWidth(strokeWidth: number) {
    this.strokeWidth = strokeWidth;
  }

  get getStrokeWidth(): number {
    return this.strokeWidth;
  }


  lineStroke: string;
  widthHieghtDimensions: string;

  aniOnload = false;
  aniHover = false;

  ngOnChanges(): void {
    this.iconColor = this.initialiseStrokeColor(this.iconColor);

    this.lineStroke = this.initialiseLineStroke(this.strokeWidth);

    this.widthHieghtDimensions = this.initialiseIconDimensions(this.dimension);

    this.setAnimationActionType(this.animationAction);

  }

  initialiseStrokeColor(iconColor?: string): string {
    return iconColor ? `${iconColor}` : 'currentColor';
  }


  initialiseLineStroke(strokeWidth?: number): string {
    return strokeWidth ? `${strokeWidth}` : '2';
  }

  initialiseIconDimensions(dimension?: number): string {
    return dimension ? `${dimension}px` : `50px`;
  }
  setAnimationActionType(animationAction?: string): void {
    switch (animationAction) {
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

