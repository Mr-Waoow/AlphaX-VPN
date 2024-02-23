import { Component, OnInit } from '@angular/core';
import { faShare, faEye, faComment } from '@fortawesome/free-solid-svg-icons';
import { Blog } from '../../shared/blog';
import { BlogsService } from '../../shared/blogs.service';

@Component({
  selector: 'xvpn-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: [BlogsService],
})
export class BlogComponent implements OnInit {
  faShare = faShare;
  faEye = faEye;
  faComment = faComment;
  blogs: Blog[] = [];
  constructor(private blogsService: BlogsService) {}
  ngOnInit(): void {
    this.blogs = this.blogsService.getBlogs();
  }
}
