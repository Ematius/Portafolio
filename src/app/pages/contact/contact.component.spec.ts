import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('Given ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Then should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the heading is rendered', () => {
    it('Then it should display "Currículum"', () => {
      const h2 = fixture.nativeElement.querySelector('h2');
      expect(h2.textContent).toContain('Currículum');
    });
  });

  describe('When the curriculum preview image is rendered', () => {
    it('Then it should show the preview with correct alt text', () => {
      const img = fixture.nativeElement.querySelector('.pdfCurriculum img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('alt')).toContain(
        'Vista previa del currículum de Emad'
      );
    });
  });

   describe('When the download link is rendered', () => {
     it('Then it should contain a link with download attribute', () => {
       const link = fixture.nativeElement.querySelector('.update a');
       expect(link).toBeTruthy();
       expect(link.getAttribute('href')).toContain('Curriculum-Emad.webp');
       expect(link.getAttribute('download')).toBe('Curriculum-Emad');
     });

     it('Then it should include the download icon', () => {
       const icon = fixture.nativeElement.querySelector('.update img');
       expect(icon).toBeTruthy();
       expect(icon.getAttribute('alt')).toContain('Icono de descarga');
     });
   });




});
