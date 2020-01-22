import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XItemsComponent } from './x-items.component';

describe('XItemsComponent', () => {
  let component: XItemsComponent;
  let fixture: ComponentFixture<XItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
