import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasComponent } from './entradas.component';

describe('EntradasComponent', () => {
  let component: EntradasComponent;
  let fixture: ComponentFixture<EntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
