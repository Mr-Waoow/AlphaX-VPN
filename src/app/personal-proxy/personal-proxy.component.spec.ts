import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProxyComponent } from './personal-proxy.component';

describe('PersonalProxyComponent', () => {
  let component: PersonalProxyComponent;
  let fixture: ComponentFixture<PersonalProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalProxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
