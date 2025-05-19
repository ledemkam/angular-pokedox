import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
  name = 'Pikachu';
  life = 5;

  incrementLife() {
  this.life =  this.life + 1;
  } 
  decrementLife() {
    this.life = this.life - 1;
  }
}
