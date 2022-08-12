import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearInfoComponent } from './last-year-info.component';

describe('LastYearInfoComponent', () => {
  let component: LastYearInfoComponent;
  let fixture: ComponentFixture<LastYearInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastYearInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastYearInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
