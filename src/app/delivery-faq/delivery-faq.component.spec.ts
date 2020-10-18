import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFaqComponent } from './delivery-faq.component';

describe('DeliveryFaqComponent', () => {
  let component: DeliveryFaqComponent;
  let fixture: ComponentFixture<DeliveryFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
