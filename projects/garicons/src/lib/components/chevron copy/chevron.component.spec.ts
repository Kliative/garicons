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

  // Check if intialise rotation direction
  it('should intialise rotation direction', () => {
    expect(component.initialiseChevronDirection()).toBe('right');
  });

  // Check if intialise rotation direction
  it('should intialise rotation direction', () => {
    expect(component.initialiseChevronViewBox(true)).toBe('0 0 13 16');
    expect(component.initialiseChevronViewBox(false)).toBe('0 0 20 16');
  });
});

