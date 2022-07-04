import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private AuthService: AuthService) { }
  data = this.AuthService.getProfileData();
  ngOnInit(): void {
    this.data;
  }
}
