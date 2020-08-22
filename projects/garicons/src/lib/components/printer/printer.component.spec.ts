/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrinterComponent } from './printer.component';

describe('PrinterComponent', () => {
  let component: PrinterComponent;
  let fixture: ComponentFixture<PrinterComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterComponent);
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
    expect(component.initialiseLineStrokePrinter()).toBe('1.5');
  });
});
