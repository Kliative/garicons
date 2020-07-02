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
    const svg = el.query(By.css('#moon-full'));
    expect(svg.classes['ani-onload']).toBeTruthy();
  });


  // Check if default onload class is applied
  it('should add hover css', () => {
    const comp = TestBed.createComponent(MoonComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#moon-full')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    comp.detectChanges();

    expect(compIn.aniHover).toBeTrue();
    expect(svg.classList).toContain('ani-hover');
  });

});
