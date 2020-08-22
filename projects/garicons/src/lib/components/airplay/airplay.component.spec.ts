/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirplayComponent } from './airplay.component';

describe('AirplayComponent', () => {
  let component: AirplayComponent;
  let fixture: ComponentFixture<AirplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
