import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRoles } from './emp-roles';

describe('EmpRoles', () => {
  let component: EmpRoles;
  let fixture: ComponentFixture<EmpRoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpRoles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpRoles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
