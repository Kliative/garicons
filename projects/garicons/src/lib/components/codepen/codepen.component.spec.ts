/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodepenComponent } from './codepen.component';

describe('CodepenComponent', () => {
  let component: CodepenComponent;
  let fixture: ComponentFixture<CodepenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodepenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
