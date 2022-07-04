import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  constructor(private router: Router, private AuthService: AuthService){}
  ngOnInit(): void {
    if(this.AuthService.getToken()){
      this.isLoggedIn = true;
    }
  }
  title = 'The New Gym';
  imgSrc  = 'assets/img/logo.png';
  data = this.AuthService.getProfileData();
  public logout() {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['']);
  }
}
