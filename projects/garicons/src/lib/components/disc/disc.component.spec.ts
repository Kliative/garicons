/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscComponent } from './disc.component';

describe('DiscComponent', () => {
  let component: DiscComponent;
  let fixture: ComponentFixture<DiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
