import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudititemComponent } from './audititem.component';

describe('AudititemComponent', () => {
  let component: AudititemComponent;
  let fixture: ComponentFixture<AudititemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudititemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudititemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
