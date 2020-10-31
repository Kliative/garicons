import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent extends BaseComponent {
  cameraState: boolean;

  @Input('cameraOn')
  set setAlertBoarderShape(cameraOn: boolean) {
    this.cameraState = cameraOn;
  }

  get getAlertBoarderShape(): boolean {
    return this.cameraState;
  }

  constructor() {
    super();
    this.cameraState = this.initialiseCameraState(this.cameraState);
  }

  initialiseCameraState(cameraState: boolean): boolean {
    return cameraState;
  }
}