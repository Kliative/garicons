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
    const svg = el.query(By.css('#sun-full'));
    expect(svg.classes['ani-onload']).toBeTruthy();
  });


  // Check if default onload class is applied
  it('should add hover css', () => {
    const comp = TestBed.createComponent(SunComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#sun-full')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    comp.detectChanges();

    expect(compIn.aniHover).toBeTrue();
    expect(svg.classList).toContain('ani-hover');
  });

});
