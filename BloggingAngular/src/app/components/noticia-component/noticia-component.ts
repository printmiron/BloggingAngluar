import { Component } from '@angular/core';
import { Noticia } from '../../interface/noticia';


@Component({
  selector: 'app-noticia-component',
  imports: [],
  templateUrl: './noticia-component.html',
  styleUrl: './noticia-component.css',
})

export class NoticiaComponent {

  // array de noticias y el numero de noticia
  arrayNoticias: Noticia[];
  noticia: number;
  noticiaActual: Noticia;

  // constructor(){
  //   this.noticia = 0;
  //   this.arrayNoticias = [{
  //     titulo: 'Numero1',
  //     url: 'https://www.bluehost.com/blog/wp-content/uploads/2023/05/parts-of-a-uniform-resource-locator-URL.png',
  //     cuerpo: 'aaa',
  //     fecha: new Date()
  //   }];
  // }

  constructor(){

    this.noticiaActual = {
      titulo: '',
      url: '',
      cuerpo: '',
      fecha: new Date()
    };

    this.noticia = 0;

    this.arrayNoticias = [];

  }

  publicarNoticia(){
    this.noticiaActual.fecha = new Date(this.noticiaActual.fecha);

    this.arrayNoticias.push({...this.noticiaActual});

    //limpiar el fomulario depsues de publicar uno
    this.noticiaActual = {
      titulo: '',
      url: '',
      cuerpo: '',
      fecha: new Date()
    };
  }

  

}

  