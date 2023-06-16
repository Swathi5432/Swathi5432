import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualReportListComponent } from './annual-report-list.component';

describe('AnnualReportListComponent', () => {
  let component: AnnualReportListComponent;
  let fixture: ComponentFixture<AnnualReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualReportListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
