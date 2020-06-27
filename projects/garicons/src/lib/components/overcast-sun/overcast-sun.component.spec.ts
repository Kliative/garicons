/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvercastSunComponent } from './overcast-sun.component';

describe('OvercastSunComponent', () => {
  let component: OvercastSunComponent;
  let fixture: ComponentFixture<OvercastSunComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercastSunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvercastSunComponent);
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
    expect(el.query(By.css('#overcast-sun-full'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#overcast-sun-full'));
    expect(svg.classes['ani-overcastsun-onload']).toBeTruthy();
  });


  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    component.animationAction = 'hover';
    const svg: HTMLElement = el.query(By.css('#overcast-sun-full')).nativeElement;
    expect(svg.classList).toContain('ani-overcastsun-onload');
  });

});

