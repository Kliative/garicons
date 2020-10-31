/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BriefcaseComponent } from './briefcase.component';

describe('BriefcaseComponent', () => {
  let component: BriefcaseComponent;
  let fixture: ComponentFixture<BriefcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
