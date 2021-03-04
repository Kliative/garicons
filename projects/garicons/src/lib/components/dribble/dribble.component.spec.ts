/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DribbleComponent } from './dribble.component';

describe('DribbleComponent', () => {
  let component: DribbleComponent;
  let fixture: ComponentFixture<DribbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DribbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
