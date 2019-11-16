import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {

  @State () posts:Array<any>;

  componentWillLoad() {

      fetch('https://cdn.contentful.com/spaces/wiothdq64tqj/environments/master/entries?access_token=fbY3krPsiW8hWQ4m7GysjrfCfBdeCP9gBLqh3klbO20')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          this.posts = data.items;
          console.log(this.posts);})


  }


  render() {
      return (
        <div class="app-profile">

        {this.posts.map((post) =>

        <am-blog blogTitle={post.fields.blogTitle} blogContent={post.fields.blogContent}/>

        )}
        </div>)
    }
  }
