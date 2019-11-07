import { Component,Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;
  @Input() index: number;
  @Input() id:number;

  constructor(private postService:PostService) { }


  ngOnInit() {

  }

  loveit(){
    this.postLoveIts=this.postLoveIts+1;
    this.postService.postloveIts(this.index,this.postLoveIts);
  }

  dontLovit(){
    this.postLoveIts=this.postLoveIts-1;
    this.postService.postloveIts(this.index,this.postLoveIts);

  }

  deletePost(){
    this.postService.deletepost(this.index);
  }

}
