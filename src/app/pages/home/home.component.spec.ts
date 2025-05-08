import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   describe('When rendering decorative circles', () => {
     it('Then should display three elements with class "circle"', () => {
       const circles = fixture.nativeElement.querySelectorAll('.circle');
       expect(circles.length).toBe(3);
     });
   });

    describe('When rendering the title wrapper', () => {
      it('Then should contain an empty <h1>', () => {
        const h1 = fixture.nativeElement.querySelector('h1');
        expect(h1).toBeTruthy();
        expect(h1.textContent?.trim()).toBe('');
      });
    });

    describe('When rendering the avatar image', () => {
      it('Then should display the smiling 3D avatar with correct alt', () => {
        const img = fixture.nativeElement.querySelector('.photo img');
        expect(img).toBeTruthy();
        expect(img.getAttribute('alt')).toBe('Avatar sonriente de Emad en 3D');
      });
    });

});
