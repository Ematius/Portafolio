import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
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
  ];
}
