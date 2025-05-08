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

  describe('When the button exists', () =>{
    it('then should be able to find the button', () =>{
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.offsetParent).not.toBeNull();
    })
  })

  describe('When the menu is toggled', () => {
    it('Then should toggle the menu state', () => {
      const initialState = component.isOpenMenu;
      component.toggleMenu();
      expect(component.isOpenMenu).toBe(!initialState);
    });
  })
  describe('When the menu is open', () => {
    it('Then should have open', () => {
      component.isOpenMenu = true;
      fixture.detectChanges();
      const menu = fixture.nativeElement.querySelector('.nav-open');
      expect(menu.classList).toBeTruthy();
    });
  });
  describe('When the menu is closed', () =>{
    it('Then should not have closed', () =>{
      component.isOpenMenu = false;
      fixture.detectChanges();
      const menu = fixture.nativeElement.querySelector('.nav-open');
      expect(menu).toBeNull();
    })
  })
});
