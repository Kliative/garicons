/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
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
    expect(el.query(By.css('#menu'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#menu'));
    expect(svg.classes['ani-onload']).toBeTruthy();
  });


  // Check if default onload class is applied
  it('should add hover css', () => {
    const comp = TestBed.createComponent(MenuComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#menu')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    comp.detectChanges();
  
    expect(compIn.aniHover).toBeTrue();
    expect(svg.classList).toContain('ani-hover');
  });

});
