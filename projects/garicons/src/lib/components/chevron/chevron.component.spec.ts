/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChevronComponent } from './chevron.component';

describe('ChevronComponent', () => {
  let component: ChevronComponent;
  let fixture: ComponentFixture<ChevronComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChevronComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ChevronComponent);
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
    expect(el.query(By.css('#chevron'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#chevron'));
    expect(svg.classes['ani-onload']).toBeTruthy();
  });

  /**
   * Not sure why i have to reinitiase the component for this to work ???
   */

  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    const comp = TestBed.createComponent(ChevronComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#chevron')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    comp.detectChanges();

    expect(compIn.aniHover).toBeTrue();
    expect(svg.classList).toContain('ani-hover');
  });


  // check if animation chevronDirection is set to right by defualt  and check dir-right css has been applied
  it('should set chevronDirection to right on defualt', () => {
    const svg: HTMLElement = el.query(By.css('#chevron')).nativeElement;
    expect(component.chevronDirection).toEqual('right');
    expect(svg.classList).toContain('dir-right');

  });

  // check if animation chevronDirection is set to left and check dir-left css has been applied
  it('should set chevronDirection to left', () => {
    const comp = TestBed.createComponent(ChevronComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#chevron')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    compIn.chevronDirection = 'left';
    comp.detectChanges();

    expect(svg.classList).toContain('dir-left');
  });

  // check if animation chevronDirection is set to left and check dir-left css has been applied
  it('should set chevron double is true then the viewport should equal  0 0  13 16', () => {
    const comp = TestBed.createComponent(ChevronComponent);
    const compIn = comp.componentInstance;

    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    compIn.double = true;
    comp.detectChanges();

    expect(compIn.correctViewBox).toEqual('0 0  13 16');
  });

  it('should set chevron double is true then the viewport should equal  0 0  13 16', () => {
    const comp = TestBed.createComponent(ChevronComponent);
    const compIn = comp.componentInstance;

    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    compIn.double = false;
    comp.detectChanges();

    expect(compIn.correctViewBox).toEqual('0 0 20 16');
  });
});

