/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrosshairComponent } from './crosshair.component';

describe('CrosshairComponent', () => {
  let component: CrosshairComponent;
  let fixture: ComponentFixture<CrosshairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosshairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosshairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
