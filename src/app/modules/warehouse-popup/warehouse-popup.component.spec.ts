import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousePopupComponent } from './warehouse-popup.component';

describe('WarehousePopupComponent', () => {
  let component: WarehousePopupComponent;
  let fixture: ComponentFixture<WarehousePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
