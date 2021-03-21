/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FastForwardComponent } from './fast-forward.component';

describe('FastForwardComponent', () => {
  let component: FastForwardComponent;
  let fixture: ComponentFixture<FastForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
