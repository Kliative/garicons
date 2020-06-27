/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RotateComponent } from './rotate.component';

describe('RotateComponent', () => {
  let component: RotateComponent;
  let fixture: ComponentFixture<RotateComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RotateComponent);
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
    expect(el.query(By.css('#rotate'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#rotate'));
    expect(svg.classes['ani-onload']).toBeTruthy();
  });

  /**
   * Not sure why i have to reinitiase the component for this to work ???
   */

  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    const comp = TestBed.createComponent(RotateComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#rotate')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    comp.detectChanges();
  
    expect(compIn.aniHover).toBeTrue();
    expect(svg.classList).toContain('ani-hover');
  });


  // check if animation clockwise is set to true by defualt  and check dir-cw css has been applied
  it('should set clockwise to true on defualt', () => {
    const svg: HTMLElement = el.query(By.css('#rotate')).nativeElement;
    expect(component.clockWise).toBeTrue();
    expect(svg.classList).toContain('dir-cw');
    
  });
  


  // check if animation clockwise is set to false the apply dir-ccw css has been applied
  it('should set clockwise to true on defualt', () => {
    const comp = TestBed.createComponent(RotateComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#rotate')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    compIn.clockWise = false;
    comp.detectChanges();
    expect(svg.classList).toContain('dir-ccw');
    
    
  });
});

