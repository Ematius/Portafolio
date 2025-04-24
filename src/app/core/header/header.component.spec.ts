import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('Given HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Then should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the menu is toggled', () => {
    it('Then should toggle the menu state', () => {
      const initialState = component.isOpenMenu;
      component.toggleMenu();
      expect(component.isOpenMenu).toBe(!initialState);
    });
  })
});
