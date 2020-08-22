/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThunderStormComponent } from './thunder-storm.component';

describe('ThunderStormComponent', () => {
  let component: ThunderStormComponent;
  let fixture: ComponentFixture<ThunderStormComponent>;
  let el: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThunderStormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThunderStormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.strokeWidth = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Check if svg exist
  it('should exist', () => {
    expect(el.query(By.css('#thunder-storm-full'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should set isRainging', () => {
    const isRaining = true;
    component.isRaining = isRaining;
    fixture.detectChanges();
    expect(component.isRaining).toBeTrue();
  });
});

