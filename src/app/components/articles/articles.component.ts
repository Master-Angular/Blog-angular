import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public title: string;
  public articles: Array<Article>;

  constructor() {
    this.title = 'Hablemos de Angular';
    this.articles = [
      new Article( 'Angular',2022, 'http://angular.io/assets/images/logos/angular/angular.png'),
      new Article('Article 1',2020, 'https://picsum.photos/id/237/200/300'),
      new Article('Article 2',2019, 'https://picsum.photos/id/237/200/300'),
      new Article('Article 3',2012, 'https://picsum.photos/id/237/200/300')

    ];
  }

  ngOnInit(): void {
  }

  cambiarTitulo() {
    this.title = 'Acabas de usar Angular';
  }

}
