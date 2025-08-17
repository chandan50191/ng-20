import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ILogin {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  router = inject(Router);

  loginObj: ILogin = {
    username: '',
    password: ''
  }

  onLogin() {
    if (this.loginObj.username === 'cdn@gmail.com' && this.loginObj.password === 'Password') {
      this.router.navigateByUrl('client');
      localStorage.setItem('user', this.loginObj.username);
    } else {
      alert("Invalid username or password!")
    }
  }
}
