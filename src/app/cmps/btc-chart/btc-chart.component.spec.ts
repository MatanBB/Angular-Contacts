import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTCChartComponent } from './btc-chart.component';

describe('BTCChartComponent', () => {
  let component: BTCChartComponent;
  let fixture: ComponentFixture<BTCChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTCChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTCChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
