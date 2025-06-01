import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { getPokemonColor } from './pokemon.model';

@Directive({
  selector: '[appPokemonBorder]',
})
export class PokemonBorderDirective {
  private readonly initialColor: string;
  pokemonType = input.required<string>();

  constructor(private readonly el: ElementRef) {
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const color = getPokemonColor(this.pokemonType());
    this.setBorderColor(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialColor;
    this.setBorderColor(color);
  }

  private setBorderColor(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }
}
