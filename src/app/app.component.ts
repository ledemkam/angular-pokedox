import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
name = signal("Pikachu");
life = signal(21);
size = computed(() => {
  if (this.life() <=  15) {
    return "small";
  }
  if (this.life() >=  30) {
    return "large";
  }
  return "medium";
} );

incrementLife() {
  this.life.update((life) => life + 1);
} 
decrementLife() {
  this.life.update((life) => life - 1);
}
}
