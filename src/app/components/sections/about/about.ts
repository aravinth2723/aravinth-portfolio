import { Component } from '@angular/core';

interface TechnicalSkill {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly technicalSkils: TechnicalSkill[] = [
    {
      title: 'FRAMEWORKS',
      skills: ['Angular 13+', 'Laravel 6+', 'Bootstrap 4+'],
    },
    {
      title: 'ANGULAR CONCEPTS',
      skills: [
        'Angular Material',
        'NgRx State Management',
        'RxJS Observables',
        'Routing(Lazy Loading)',
        'Signals',
      ],
    },
    {
      title: 'PROGRAMING LANGUAGES',
      skills: ['HTML,CSS & SCSS', 'JavaScript', 'TypeScript', 'PHP'],
    },
    {
      title: 'BUILD TOOLS',
      skills: ['Angular Cli'],
    },
    {
      title: 'PERFOMANCE AUDIT',
      skills: ['Chrome DevTools', 'Angular DevTools'],
    },
    {
      title: 'VERSION CONTROL',
      skills: ['GIT', 'GitLab', 'GitHub'],
    },
    {
      title: 'OTHERS',
      skills: ['NPM', 'MySQL'],
    },
  ];
}
