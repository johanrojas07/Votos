import { Article } from './Article';
import { Component } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent {
  title: string;
  articles: Article[];
  constructor() {
    this.title  = 'Votes App';
    this.articles= [
      new Article('Angular2', 'http://angular.io',30),
      new Article('johan', 'http://johan.io',20),
      new Article('Nada', 'http://nada.io',5),
    ];
  }
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
    this.articles.push(
      new Article(title.value, link.value);
    );
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles() : Article[]{
    return this.articles.sort((a : Article ,b : Article) => b.votes - a.votes );
  }
  

}
