import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cn-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.scss']
})
export class HeroButtonComponent {

  
  @Input() label: string = "Button";
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  buttonClick() {
    this.onClick.emit();
  }
}
