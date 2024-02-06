import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // posts = [
  //   { title: 'First Post', content: 'This is the first\'s content' },
  //   { title: 'Second Post', content: 'This is the second\'s content' },
  //   { title: 'Third Post', content: 'This is the third\'s content' },
  //   { title: 'Fourth Post', content: 'This is the fourth\'s content' },
  // ]

  posts: {title: string, content: string}[] = []

}
