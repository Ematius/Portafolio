import { Component, } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  showSkills = false;

  toggleSkills() {
    if (this.showSkills) {
      gsap.to('.skill-item', {
        autoAlpha: 0,
        scale: 0.5,
        y: -40,
        stagger: 0.2,
        duration: 0.5,
        ease: 'sine.in',
        onComplete: () => {
          this.showSkills = false;
        },
      });
    } else {
      this.showSkills = true;
      setTimeout(() => {
        gsap.from('.skill-item', {
          autoAlpha: 0,
          scale: 0.5,
          y: -40,
          stagger: 0.2,
          duration: 0.5,
          ease: 'sine.out',
        });
      });
    }
  }
  icons = [
    { name: 'HTML', file: 'HTML.svg' },
    { name: 'CSS', file: 'CSS.svg' },
    { name: 'JS', file: 'javascript.svg' },
    { name: 'TS', file: 'typescript.svg' },
    { name: 'Angular', file: 'angular.svg' },
    { name: 'Node', file: 'Node.svg' },
    { name: 'Express', file: 'express.svg' },
    { name: 'MySQL', file: 'mysql.svg' },
    { name: 'MongoDB', file: 'mongodb.svg' },
    { name: 'Vitest', file: 'vitest.svg' },
    { name: 'Jest', file: 'Jest.svg' },
    { name: 'Prettier', file: 'prettier.svg' },
    { name: 'ESLint', file: 'ESLint.svg' },
    { name: 'Postman', file: 'postman.svg' },
    { name: 'GitHub', file: 'Git.svg' },
  ];


}
