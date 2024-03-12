import { Component, OnInit, Renderer2 } from '@angular/core';
import { QuestionData } from './interfaces/question-data';
import { QuestionsDataService } from './services/questions-data.service';
import { Methods } from '../shared/classes/methods';

@Component({
  selector: 'xvpn-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  providers: [QuestionsDataService],
})
export class FaqComponent implements OnInit {
  questions: QuestionData[] = [];
  methods = new Methods();
  constructor(private questionsDataService: QuestionsDataService) {}
  ngOnInit(): void {
    this.questions = this.questionsDataService.getQuestionsData();
  }
  openDivPlus(evt: Event): void {
    this.methods.openable.openDivPlus(evt);
  }
}
