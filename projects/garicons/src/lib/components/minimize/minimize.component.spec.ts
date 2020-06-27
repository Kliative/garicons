/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MinimizeComponent } from './minimize.component';

describe('MinimizeComponent', () => {
  let component: MinimizeComponent;
  let fixture: ComponentFixture<MinimizeComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimizeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.strokeWidth = 1;
    fixture.detectChanges();
  });

  // Check if svg exist
  it('should exist', () => {
    expect(el.query(By.css('#minimize'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#minimize'));
    expect(svg.classes['ani-onload']).toBeTruthy();
  });


  // Check if default onload class is applied
  it('should add hover css', () => {
    const comp = TestBed.createComponent(MinimizeComponent);
    const compIn = comp.componentInstance;

    const svg: HTMLElement = comp.debugElement.query(By.css('#minimize')).nativeElement;
    compIn.animationAction = 'hover';
    compIn.strokeWidth = 1;
    comp.detectChanges();
  
    expect(compIn.aniHover).toBeTrue();
    expect(svg.classList).toContain('ani-hover');
  });

});
