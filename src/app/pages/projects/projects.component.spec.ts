import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('Given ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Then should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('When rendering the title', () => {
    it('Then should display the heading "Proyectos"', () => {
      const h2 = fixture.nativeElement.querySelector('h2.h2Projects');
      expect(h2).toBeTruthy();
      expect(h2.textContent).toContain('Proyectos');
    });
  });

  describe('When rendering project images', () => {
    it('Then should display four images in total', () => {
      const images = fixture.nativeElement.querySelectorAll('.projects img');
      expect(images.length).toBe(4);
    });

    it('Then the first image should link to the GitHub repo', () => {
      const firstImage = fixture.nativeElement.querySelector('.projects img');
      expect(firstImage.getAttribute('alt')).toContain(
        'Proyecto en construcción 1'
      );
      expect(firstImage.getAttribute('onclick')).toContain(
        "window.open('https://github.com/Ematius/Temple_of_Fight'"
      );
    });
  });

});
