import { Component, OnInit } from '@angular/core';
import { QuestionData } from './question-data';
import { QuestionsDataService } from './questions-data.service';
import { Openable } from '../shared/openable';

@Component({
  selector: 'xvpn-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  providers: [QuestionsDataService],
})
export class FaqComponent implements OnInit {
  questions: QuestionData[] = [];
  openable = new Openable();
  constructor(private questionsDataService: QuestionsDataService) {}
  ngOnInit(): void {
    this.questions = this.questionsDataService.getQuestionsData();
  }
  openDivPlus(evt: Event): void {
    this.openable.openDivPlus(evt);
  }
}
