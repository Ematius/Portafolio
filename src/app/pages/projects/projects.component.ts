import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit{

  visible = false;

  @ViewChild('titleRef') titleRef!: ElementRef;

  ngAfterViewInit(): void {
   const observer = new IntersectionObserver(
     ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          observer.disconnect(); // Solo una vez
        }
      },
      { threshold: 0.5 } // Cuando entra el 50%
    );

    observer.observe(this.titleRef.nativeElement);
  }





}
