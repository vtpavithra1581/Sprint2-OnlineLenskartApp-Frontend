import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGlassesComponent } from './create-glasses.component';

describe('CreateGlassesComponent', () => {
  let component: CreateGlassesComponent;
  let fixture: ComponentFixture<CreateGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGlassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
