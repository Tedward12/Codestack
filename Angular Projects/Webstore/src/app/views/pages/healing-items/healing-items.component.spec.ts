import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingItemsComponent } from './healing-items.component';

describe('HealingItemsComponent', () => {
  let component: HealingItemsComponent;
  let fixture: ComponentFixture<HealingItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealingItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
