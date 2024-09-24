import { Component, OnInit } from '@angular/core';
import { QuestionData } from '../shared/interfaces/question-data';
import { Methods } from '../shared/classes/methods';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'xvpn-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent implements OnInit {
  questions: QuestionData[] = [];
  methods = new Methods();
  intiated: boolean = false;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getQuestionsData().subscribe({
      next: (data: QuestionData[]) => {
        this.questions = data;
        console.log('Questions data', data);
      },
      error: (error) => console.error('Error fetching questions data', error),
    });
  }
 ngAfterViewInit(): void {
  setTimeout(() => {
      this.intiated = true;
    }, 200);
 }
  openDivPlus(evt: Event): void {
    this.methods.openable.openDivPlus(evt);
  }
}
