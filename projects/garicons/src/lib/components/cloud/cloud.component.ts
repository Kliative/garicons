import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent extends BaseComponent {


  cloudType: string;

  @Input('cloudType')
  set setCloudType(cloudType: string) {
    this.cloudType = cloudType;
  }

  get getCloudType(): string {
    return this.cloudType;
  }

  constructor() {
    super();

    this.cloudType = this.initialiseCloudType();
  }

  initialiseCloudType(): string {
    let cloudType: string;
    return cloudType ? this.cloudType : '';
  }
}