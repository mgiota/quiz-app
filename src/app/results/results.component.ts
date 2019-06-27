import { Component, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  styles: [
    `
      .greenClass { color: green }
      .redClass { color: red }
    `
  ]
})
export class ResultsComponent {
  @Input()
  answers: Answers;
  questions: Question [];
}
