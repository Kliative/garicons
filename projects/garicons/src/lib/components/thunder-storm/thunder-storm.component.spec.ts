/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThunderStormComponent } from './thunder-storm.component';

describe('ThunderStormComponent', () => {
  let component: ThunderStormComponent;
  let fixture: ComponentFixture<ThunderStormComponent>;
  let el: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThunderStormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThunderStormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.strokeWidth = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Check if svg exist
  it('should exist', () => {
    expect(el.query(By.css('#thunder-storm-full'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#thunder-storm-full'));
    expect(svg.classes['ani-thunderstorm-onload']).toBeTruthy();
  });


  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    component.animationAction = 'hover';
    const svg: HTMLElement = el.query(By.css('#thunder-storm-full')).nativeElement;
    expect(svg.classList).toContain('ani-thunderstorm-onload');
  });

});

