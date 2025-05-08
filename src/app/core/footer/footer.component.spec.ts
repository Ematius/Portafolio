import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('Given FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Then should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('When social links exist', () => {
    it('Then should render linkedIn and GitHub anchors', () =>{
      const links = fixture.nativeElement.querySelectorAll('a');
      expect(links.length).toBe(2);
      expect(links[0].getAttribute('href')).toContain('linkedin.com');
      expect(links[1].getAttribute('href')).toContain('github.com');
    })
  })

   describe('When rendering the credit text', () => {
     it('Then should include creator name', () => {
       const text = fixture.nativeElement.querySelector('p');
       expect(text.textContent).toContain('Emad Kadyear');
     });
   });

   describe('When isVisible is true', () => {
     it('Then the avatar should have class "visible"', () => {
       component.isVisible = true;
       fixture.detectChanges();
       const avatar = fixture.nativeElement.querySelector(
         'img[alt="Avatar de Emad saludando"]'
       );
       expect(avatar.classList.contains('visible')).toBeTrue();
     });
   });

});
