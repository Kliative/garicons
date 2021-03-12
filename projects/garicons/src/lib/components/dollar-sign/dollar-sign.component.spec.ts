/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DollarSignComponent } from './dollar-sign.component';

describe('DollarSignComponent', () => {
  let component: DollarSignComponent;
  let fixture: ComponentFixture<DollarSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
