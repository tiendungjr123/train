import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://staging.thenewgym.vn:3000'
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  public login(user: any){
    return this.http.post(this.api + '/auth/login/', user).subscribe((result: any) => {
      localStorage.setItem('accessToken', result.data.accessToken);
      localStorage.setItem('refreshToken', result.data.refreshToken);
      this.setDataInfo(result.data.accessToken);
      this.setDataClub(result.data.accessToken);
    })

  }

  public setDataInfo(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    this.http.get(this.api + '/auth/profile', httpOptions).subscribe((res: any) => {
      localStorage.setItem('USER_PROFILE', JSON.stringify(res.data));
    });
  }

  public setDataClub(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    this.http.get(this.api + '/general/club', httpOptions).subscribe((res: any) => {
      localStorage.setItem('CLUB', JSON.stringify(res.data));
    });
  }

  public getToken(){
    return localStorage.getItem('accessToken') || null;
  }

  public getProfileData(): any {
    const userProfile = JSON.parse(localStorage.getItem('USER_PROFILE')||'{}');
    return userProfile;
  }



}
