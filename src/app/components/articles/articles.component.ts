import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public title: string;
  public articles: Array<any>;

  constructor() {
    this.title = 'Hablemos de Angular';
    this.articles = [
      { title: 'Article 1', image: 'https://picsum.photos/id/237/200/300' },
      { title: 'Article 2', image: 'https://picsum.photos/id/237/200/300' },
      { title: 'Article 3', image: 'https://picsum.photos/id/237/200/300' },

    ];
  }

  ngOnInit(): void {
  }

  cambiarTitulo() {
    this.title = 'Acabas de usar Angular';
  }

}
