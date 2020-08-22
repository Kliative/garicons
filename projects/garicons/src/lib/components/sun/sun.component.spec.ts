/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SunComponent } from './sun.component';

describe('SunComponent', () => {
  let component: SunComponent;
  let fixture: ComponentFixture<SunComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SunComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SunComponent);
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
    expect(el.query(By.css('#sun-full'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    component.setAnimationActionType('onload');
    fixture.detectChanges();
    expect(component.aniHover).toBeFalse();
    expect(component.aniOnload).toBeTrue();
  });


  // Check if default onload class is applied
  it('should add hover css', () => {
    component.setAnimationActionType('hover');
    fixture.detectChanges();
    expect(component.aniOnload).toBeFalse();
    expect(component.aniHover).toBeTrue();

  });

});
