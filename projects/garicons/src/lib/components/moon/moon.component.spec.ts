/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoonComponent } from './moon.component';

describe('MoonComponent', () => {
  let component: MoonComponent;
  let fixture: ComponentFixture<MoonComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoonComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MoonComponent);
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
    expect(el.query(By.css('#moon-full'))).toBeTruthy();
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
