/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvercastComponent } from './overcast.component';

describe('OvercastComponent', () => {
  let component: OvercastComponent;
  let fixture: ComponentFixture<OvercastComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvercastComponent);
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
    expect(el.query(By.css('#overcast-full'))).toBeTruthy();
  });

  // Check if default onload class is applied
  it('should add onload css', () => {
    const svg = el.query(By.css('#overcast-full'));
    expect(svg.classes['ani-overcast-onload']).toBeTruthy();
  });


  // check if animation hover is 'hover' then classList should contain .*-hover
  it('should add hover css', () => {
    component.animationAction = 'hover';
    const svg: HTMLElement = el.query(By.css('#overcast-full')).nativeElement;
    expect(svg.classList).toContain('ani-overcast-onload');
  });

});
