/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtSignComponent } from './at-sign.component';

describe('AtSignComponent', () => {
  let component: AtSignComponent;
  let fixture: ComponentFixture<AtSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
