import { Component, signal } from '@angular/core';
import { NoticiaComponent } from "./components/noticia-component/noticia-component";

@Component({
  selector: 'app-root',
  imports: [NoticiaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BloggingAngular');
}

