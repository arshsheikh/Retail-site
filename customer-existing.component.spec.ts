import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerExistingComponent } from './customer-existing.component';

describe('CustomerExistingComponent', () => {
  let component: CustomerExistingComponent;
  let fixture: ComponentFixture<CustomerExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerExistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
