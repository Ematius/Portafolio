import {
  Component,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './core/header/header.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    KnowledgeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('sectionRef', { read: ElementRef })
  sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.sections.forEach((section) => {
      gsap.from(section.nativeElement, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }
}
