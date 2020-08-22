/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let fixture: ComponentFixture<BaseComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.strokeWidth = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should set dimension', () => {
    expect(component.initialiseIconDimensions(23)).toBe('23px');
  });

  it('should set stroke width', () => {
    expect(component.initialiseLineStroke(2)).toBe('2');
  });

  it('should set stroke width', () => {
    expect(component.initialiseStrokeColor()).toBe('currentColor');
  });
});
