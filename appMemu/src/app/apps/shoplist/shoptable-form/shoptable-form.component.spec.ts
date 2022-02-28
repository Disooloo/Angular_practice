import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoptableFormComponent } from './shoptable-form.component';

describe('ShoptableFormComponent', () => {
  let component: ShoptableFormComponent;
  let fixture: ComponentFixture<ShoptableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoptableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoptableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
