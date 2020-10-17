import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProductosComponent } from './delivery-productos.component';

describe('DeliveryProductosComponent', () => {
  let component: DeliveryProductosComponent;
  let fixture: ComponentFixture<DeliveryProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
