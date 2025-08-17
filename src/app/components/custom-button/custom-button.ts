import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css'
})
export class CustomButton {
  @Input() btnText = "";
  @Input() btnClass = ""; 

  @Output() onBtnClicked = new EventEmitter<any>;

  onClick () {
    // Passing data for example
    this.onBtnClicked.emit('Admin');
  }
}
