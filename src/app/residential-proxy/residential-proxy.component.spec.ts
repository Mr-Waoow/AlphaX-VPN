import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialProxyComponent } from './residential-proxy.component';

describe('ResidentialProxyComponent', () => {
  let component: ResidentialProxyComponent;
  let fixture: ComponentFixture<ResidentialProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentialProxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentialProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
