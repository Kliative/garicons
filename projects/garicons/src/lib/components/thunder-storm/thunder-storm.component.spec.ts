/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThunderStormComponent } from './thunder-storm.component';

describe('ThunderStormComponent', () => {
  let component: ThunderStormComponent;
  let fixture: ComponentFixture<ThunderStormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThunderStormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThunderStormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
