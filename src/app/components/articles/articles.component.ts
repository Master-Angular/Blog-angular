import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Articles';
  }

  ngOnInit(): void {
  }

  cambiarTitulo() {
    this.title = 'Nuevo titulo';
  }

}
