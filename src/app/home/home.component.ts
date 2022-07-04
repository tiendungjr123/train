import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clubs: any;
  data:any;

  constructor(private AuthService: AuthService) {}
  imgSrc  = 'assets/img/logo.png';
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('CLUB')||'[]'));

    this.clubs=this.data.slice(0,6)
    console.log(this.data);
  }

  public loadMore(){
    let newLength = this.clubs.length + 3;
    if (newLength > this.data.length) {
        newLength = this.data.length
    }
    this.clubs = this.data.slice(0, newLength);
  }

}
