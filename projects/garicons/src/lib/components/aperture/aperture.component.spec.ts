/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApertureComponent } from './aperture.component';

describe('ApertureComponent', () => {
  let component: ApertureComponent;
  let fixture: ComponentFixture<ApertureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApertureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
