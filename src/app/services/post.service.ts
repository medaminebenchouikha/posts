import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject=new Subject<any[]>();

  private posts = [
    {
      title: "Mon premier post",
      content: "Premier content",
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Deuxième content",
      loveIts: -1,
      created_at: new Date()
    }
  ]

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

  postloveIts(index:number,loveIts:number){
    this.posts[index].loveIts=loveIts;
    this.emitPostSubject();  
  }

 

  deletepost(index:number){
    this.posts.splice(index,1);
    this.emitPostSubject();
  }

  addPost(title:string,content:string){
    const postObject= {
      title: title,
      content: content,
      loveIts: 0,
      created_at: new Date()
    };
    this.posts.push(postObject);
    this.emitPostSubject();
  }


}
