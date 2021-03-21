import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent extends BaseComponent {
  fileType: string;

  @Input('fileType')
  set setFileType(fileType: string) {
    this.fileType = fileType;
  }

  get getFileType(): string {
    return this.fileType;
  }

  constructor() {
    super();
    this.fileType = this.initialiseFileType();
  }

  initialiseFileType(): string {
    let fileType: string;
    return fileType ? this.fileType: '';
  }
}