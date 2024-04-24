import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalQuestionsService {
  getPersonalQuestions() {
    return [
      {
        id: 1,
        question: 'Can I Choose A Certain City?',
        answers:
          'Basically not, though you can contact our support and they will try to find the city you need.',
      },
      {
        id: 2,
        question: 'What Authorization Methods Are Supported?',
        answers:
          'You can choose to authorize either by login and password or you you can authorize by a whitelisted IP address.',
      },
      {
        id: 3,
        question:
          'How Many Times Can You Change My Credentials Or Whitelisted IP Address?',
        answers: 'There is no limit at this point.',
      },
      {
        id: 4,
        question: 'How Much Bandwidth Is Given To A Proxy?',
        answers: 'All personal proxies have 100 MB/s bandwidth.',
      },
      {
        id: 5,
        question: 'Are They Suitable For My Service?',
        answers: 'We recommend you to contact our support to get more details.',
      },
      {
        id: 6,
        question: 'Do You Have X Country?',
        answers:
          'If you were unlucky to find a certain country, be sure to make a request for adding this country and contact our support.',
      },
      {
        id: 8,
        question: 'Are Personal Proxies Refundable?',
        answers: 'Personal proxies are not refundable.',
      },
      {
        id: 9,
        question: 'What Protocols Do Proxies Support?',
        answers:
          'Our proxies support all major protocols such as HTTP(s), SOCKS4/4a/5.',
      },
    ];
  }
  constructor() {}
}
