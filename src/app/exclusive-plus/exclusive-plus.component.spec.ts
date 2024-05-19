import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivePlusComponent } from './exclusive-plus.component';

describe('ExclusivePlusComponent', () => {
  let component: ExclusivePlusComponent;
  let fixture: ComponentFixture<ExclusivePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExclusivePlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExclusivePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
