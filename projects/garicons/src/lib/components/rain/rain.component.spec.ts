/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RainComponent } from './rain.component';

describe('RainComponent', () => {
  let component: RainComponent;
  let fixture: ComponentFixture<RainComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainComponent);
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
    expect(el.query(By.css('#rain-icon'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#rain-icon'));
    expect(svg.classes['ani-rain-onload']).toBeTruthy();
  });


  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    component.animationAction = 'hover';
    const svg: HTMLElement = el.query(By.css('#rain-icon')).nativeElement;
    expect(svg.classList).toContain('ani-rain-onload');
  });

});
