/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CodesandboxComponent } from './codesandbox.component';

describe('CodesandboxComponent', () => {
  let component: CodesandboxComponent;
  let fixture: ComponentFixture<CodesandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
