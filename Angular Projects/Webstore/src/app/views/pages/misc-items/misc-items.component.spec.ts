import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscItemsComponent } from './misc-items.component';

describe('MiscItemsComponent', () => {
  let component: MiscItemsComponent;
  let fixture: ComponentFixture<MiscItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
