import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAboutComponent } from './delivery-about.component';

describe('DeliveryAboutComponent', () => {
  let component: DeliveryAboutComponent;
  let fixture: ComponentFixture<DeliveryAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
