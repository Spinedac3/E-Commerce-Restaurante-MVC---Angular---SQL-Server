import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicoresComponent } from './licores.component';

describe('LicoresComponent', () => {
  let component: LicoresComponent;
  let fixture: ComponentFixture<LicoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
