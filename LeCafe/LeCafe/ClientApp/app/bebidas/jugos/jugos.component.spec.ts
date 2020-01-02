import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugosComponent } from './jugos.component';

describe('JugosComponent', () => {
  let component: JugosComponent;
  let fixture: ComponentFixture<JugosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
