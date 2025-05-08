import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('Given AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Then should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the title is rendered', () => {
    it('Then it should display "Sobre mí"', () => {
      const h2 = fixture.nativeElement.querySelector('h2');
      expect(h2.textContent).toContain('Sobre mí');
    });
  });

  describe('When toggleSkills is called', () => {
    it('Then it should toggle the skills visibility', () => {
      const initial = component.showSkills;
      component.toggleSkills();
      expect(component.showSkills).toBe(!initial);
    });

    it('Then it should be triggered by clicking the button', () => {
      const spy = spyOn(component, 'toggleSkills');
      const button = fixture.nativeElement.querySelector('.toggle-button');
      button.click();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('When skills should be shown', () => {
    it('Then should display the skills list', () => {
      component.showSkills = true;
      component.icons;
      fixture.detectChanges();

      const skillsList = fixture.nativeElement.querySelectorAll('.skill-item');
      expect(skillsList.length).toBe(15);
      expect(skillsList[0].textContent).toContain('HTML');
      expect(skillsList[14].textContent).toContain('GitHub');
    });
  });
  
   describe('When the avatar is rendered', () => {
     it('Then should display the 3D avatar image', () => {
       const img = fixture.nativeElement.querySelector('img.avatar');
       expect(img).toBeTruthy();
       expect(img.getAttribute('alt')).toBe('Avatar');
     });
   });
});
