import { Component } from '@angular/core';
import { Noticia } from '../../interface/noticia';


@Component({
  selector: 'app-noticia-component',
  imports: [],
  templateUrl: './noticia-component.html',
  styleUrl: './noticia-component.css',
})
export class NoticiaComponent {

  arrayNoticias: Noticia[];
  noticia: number;

  constructor(){
    this.noticia = 0;
    this.arrayNoticias = [{
      titulo: 'Numero1',
      url: 'https://www.bluehost.com/blog/wp-content/uploads/2023/05/parts-of-a-uniform-resource-locator-URL.png',
      cuerpo: 'aaa',
      fecha: new Date()
    }];
  }

}

  