/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CornerComponent } from './corner.component';

describe('CornerComponent', () => {
  let component: CornerComponent;
  let fixture: ComponentFixture<CornerComponent>;
  let el: DebugElement;
  beforeEach(() => {
    fixture = TestBed.createComponent(CornerComponent);
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
    expect(el.query(By.css('#corner-full'))).toBeTruthy();
  });



  // check if animation chevronDirection is set to right by defualt  and check dir-right css has been applied
  it('should set chevronDirection to right on defualt', () => {
    const svg: HTMLElement = el.query(By.css('#corner')).nativeElement;
    expect(component.direction).toEqual('right');
    expect(svg.classList).toContain('dir-right');

  });

  // check if animation turn is set to down and check turn-down css has been applied
  it('should set turn to down', () => {
    const comp = TestBed.createComponent(CornerComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#corner-full')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    compIn.direction = 'left';
    compIn.turn = 'down';
    comp.detectChanges();

    expect(svg.classList).toContain('turn-down');
  });


});

