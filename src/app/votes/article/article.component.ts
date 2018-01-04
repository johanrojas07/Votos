import { Article } from './../Article';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article']
})
export class ArticleComponent {
  article: Article;

  constructor() { }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }



}
