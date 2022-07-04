import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService : AuthService, private router : Router) { }
  ngOnInit(): void {
      this.initForm();
  }

  initForm(){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  public onClickSubmit(){
    if (this.loginForm.invalid) {
      alert('Login fail!')
    }
    else{
      this.authService.login(this.loginForm.value);
      this.router.navigate(['/home'])
    }
  }

}

