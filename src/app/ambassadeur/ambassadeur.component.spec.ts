import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadeurComponent } from './ambassadeur.component';

describe('AmbassadeurComponent', () => {
  let component: AmbassadeurComponent;
  let fixture: ComponentFixture<AmbassadeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbassadeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmbassadeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
