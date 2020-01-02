import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesayunosComponent } from './desayunos.component';

describe('DesayunosComponent', () => {
  let component: DesayunosComponent;
  let fixture: ComponentFixture<DesayunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesayunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
