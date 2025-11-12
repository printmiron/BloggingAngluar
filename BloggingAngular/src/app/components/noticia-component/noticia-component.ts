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

  // guardar todas las noticias en el array, con la estructura de la interfaz
  arrayNoticias: Noticia[];
  // contador de noticias
  noticia: number;
  //noticia que se escribe en el formulario
  noticiaActual: Noticia;

  constructor() {

    //inicializa la noticia en blanco y despues inicializa la lista de noticias como array vacio
    this.noticiaActual = {
      titulo: '',
      url: '',
      cuerpo: '',
      fecha: new Date()
    };



    this.noticia = 0;

    //cargamos en el array dos noticias
    this.arrayNoticias = [

      {
        titulo: 'Noticia 1',
        url: 'https://www.bluehost.com/blog/wp-content/uploads/2023/05/parts-of-a-uniform-resource-locator-URL.png',
        cuerpo: 'Contenido noticia 1',
        // mes/dia/año -> no se porque es asi pero en la pagina se ve como -> dia/mes/año
        fecha: new Date('11/12/2025')
      },
      {
        titulo: 'Noticia 2',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDc4YsaPCvNoHh-5x1XkFpGlR7jK12Yt0tg&s',
        cuerpo: 'Contenido noticia 2',
        fecha: new Date('11/10/2025')
      }

    ];



  }

  publicarNoticia() {
    //guarda la noticia en array y para crear una copia y evitar modificar la referencia
    this.arrayNoticias.push({ ...this.noticiaActual });

    //limpiar el fomulario depsues de publicar uno
    this.noticiaActual = {
      titulo: '',
      url: '',
      cuerpo: '',
      fecha: new Date()
    };
  }



}

