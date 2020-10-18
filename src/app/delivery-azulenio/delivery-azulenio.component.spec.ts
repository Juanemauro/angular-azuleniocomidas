import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAzulenioComponent } from './delivery-azulenio.component';

describe('DeliveryAzulenioComponent', () => {
  let component: DeliveryAzulenioComponent;
  let fixture: ComponentFixture<DeliveryAzulenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAzulenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAzulenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
