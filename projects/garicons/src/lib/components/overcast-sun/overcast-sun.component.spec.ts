/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvercastSunComponent } from './overcast-sun.component';

describe('OvercastSunComponent', () => {
  let component: OvercastSunComponent;
  let fixture: ComponentFixture<OvercastSunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercastSunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvercastSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
