import { async, TestBed } from '@angular/core/testing';
import { DesayunosCenasComponent } from './desayunos-cenas.component';
describe('DesayunosCenasComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DesayunosCenasComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DesayunosCenasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=desayunos-cenas.component.spec.js.map