import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasummaryComponent } from './datasummary.component';

describe('DatasummaryComponent', () => {
  let component: DatasummaryComponent;
  let fixture: ComponentFixture<DatasummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
