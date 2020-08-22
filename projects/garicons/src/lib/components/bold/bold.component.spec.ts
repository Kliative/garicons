/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoldComponent } from './bold.component';

describe('BoldComponent', () => {
  let component: BoldComponent;
  let fixture: ComponentFixture<BoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
