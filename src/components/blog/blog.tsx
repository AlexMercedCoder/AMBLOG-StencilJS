import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'am-blog',
  styleUrl: 'blog.css',
  shadow: true
})
export class Blog {

    @Prop () blogTitle: string;
    @Prop () blogContent: string;

  render() {
    return (
     <div>
        <h1>{this.blogTitle}</h1>
        <p>{this.blogContent}</p>
     </div>
    );
  }

}
