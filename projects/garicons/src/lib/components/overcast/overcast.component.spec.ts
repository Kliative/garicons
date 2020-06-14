/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvercastComponent } from './overcast.component';

describe('OvercastComponent', () => {
  let component: OvercastComponent;
  let fixture: ComponentFixture<OvercastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvercastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
