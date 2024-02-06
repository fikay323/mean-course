import { Component, input } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.css'
})
export class PostsCreateComponent {
  inputContent: string = ''
  inputTitle: string = ''

  onAdddPost() {
    const post = {
      title: this.inputTitle,
      content: this.inputContent
    }
  }

}
