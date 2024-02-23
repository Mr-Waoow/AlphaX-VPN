import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdServicesComponent } from './offerd-services.component';

describe('OfferdServicesComponent', () => {
  let component: OfferdServicesComponent;
  let fixture: ComponentFixture<OfferdServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferdServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferdServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
