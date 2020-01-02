import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakesComponent } from './pancakes.component';

describe('PancakesComponent', () => {
  let component: PancakesComponent;
  let fixture: ComponentFixture<PancakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PancakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PancakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
