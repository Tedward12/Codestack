import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballsComponent } from './pokeballs.component';

describe('PokeballsComponent', () => {
  let component: PokeballsComponent;
  let fixture: ComponentFixture<PokeballsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeballsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeballsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
