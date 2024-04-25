import { Component, OnInit } from '@angular/core';
import { faShare, faEye, faComment } from '@fortawesome/free-solid-svg-icons';
import { Blog } from '../../shared/interfaces/blog';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'xvpn-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  faShare = faShare;
  faEye = faEye;
  faComment = faComment;
  blogs: Blog[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.blogs = this.dataService.getBlogs();
  }
}
