import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
    Welcome to this version of my blog which uses Contentfuls Headless CMS. I've been creating different front-ends
    using different front-end frameworks such Vue, Angular 8 and more to show the nimbleness of headless architecture along with learning how to use these front end frameworks.<br/><br/>
    <a href="http://www.alexmerced.com">My Portfolio Website</a>
        </p>


        <stencil-route-link url='/profile/'>
          <button>
            Blog Posts
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
