import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLoadingComponent } from './bar-loading.component';

describe('BarLoadingComponent', () => {
  let component: BarLoadingComponent;
  let fixture: ComponentFixture<BarLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
