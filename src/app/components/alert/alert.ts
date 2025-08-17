import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {

  // Input is called property decorator
  @Input() alertType: string = '';
  @Input() message: string = '';

}
