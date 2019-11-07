import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'new',
    component: NewPostComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
