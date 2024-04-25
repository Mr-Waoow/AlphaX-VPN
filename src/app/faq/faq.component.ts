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
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.questions = this.dataService.getQuestionsData();
  }
  openDivPlus(evt: Event): void {
    this.methods.openable.openDivPlus(evt);
  }
}
