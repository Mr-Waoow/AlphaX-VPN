import { Blog } from "./blog";

export class BlogsService {
  getBlogs(): Blog[] {
    return [
      {
        blogId: 1,
        blogName: 'New Mobile Proxy tariff: dtac (Thailand).',
        blogDescription:
          'We have added a new operator and reduced prices for all Mobile Proxy packs.',
        blogDateDay: 23,
        blogDateMonth: 'Jan',
        blogDateYear: 2019,
        blogCommentNumber: 8,
        blogViwers: 4348,
        blogShares: 27,
      },
      {
        blogId: 2,
        blogName: 'New Mobile Proxy tariff: dtac (Thailand).',
        blogDescription:
          'We have added a new operator and reduced prices for all Mobile Proxy packs.',
        blogDateDay: 23,
        blogDateMonth: 'Jan',
        blogDateYear: 2019,
        blogCommentNumber: 8,
        blogViwers: 4348,
        blogShares: 27,
      },
      {
        blogId: 3,
        blogName: 'New Mobile Proxy tariff: dtac (Thailand).',
        blogDescription:
          'We have added a new operator and reduced prices for all Mobile Proxy packs.',
        blogDateDay: 23,
        blogDateMonth: 'Jan',
        blogDateYear: 2019,
        blogCommentNumber: 8,
        blogViwers: 4348,
        blogShares: 27,
      },
    ];
  }
  constructor() {}
}
