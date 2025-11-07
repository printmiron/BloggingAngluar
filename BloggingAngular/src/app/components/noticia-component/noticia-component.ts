import { Component } from '@angular/core';
import { Noticia } from '../../interface/noticia';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-noticia-component',
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './noticia-component.html',
  styleUrl: './noticia-component.css',
})

export class NoticiaComponent {

  // guardar todas las noticias
  arrayNoticias: Noticia[];
  // contador de noticias
  noticia: number;
  //noticia que se escribe en el formulario
  noticiaActual: Noticia;

  //ejemplo ar principio
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

    //inicializa la noticia en blanco y despues inicializa la lista de noticias como array vacio
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
    //guarda la noticia en array y para crear una copia y evitar modificar la referencia
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

  