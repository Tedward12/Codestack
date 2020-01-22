import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApricornsComponent } from './apricorns.component';

describe('ApricornsComponent', () => {
  let component: ApricornsComponent;
  let fixture: ComponentFixture<ApricornsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApricornsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApricornsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
