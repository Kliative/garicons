import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GariconsComponent } from './garicons.component';

describe('GariconsComponent', () => {
  let component: GariconsComponent;
  let fixture: ComponentFixture<GariconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GariconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GariconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
