import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _coreApi = `${environment.coreApi}api/v1/auth`
  isUserLoggedIn: boolean = false;

  constructor(
    private readonly _http: HttpClient,
  ) { }

  set accessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  get accessToken(): string {
    return localStorage.getItem('access_token') ?? '';
  }

  set remember(status: string) {
    localStorage.setItem('remember', status);
  }

  get remember(): string {
    return localStorage.getItem('remember') ?? '';
  }

  signIn(credentials: { username: string, password: string, rememberMe: boolean }): Observable<string> {
    this.remember = `${credentials.rememberMe}`;

    return this._http.post<string>(`${this._coreApi}/sign-in`, credentials).pipe(
      switchMap((res: any) => {
        this.accessToken = res.accessToken;
        this.isUserLoggedIn = true;

        return of(res);
      })
    );
  }

  checkOldPassword(password: string): Observable<string> {
    return this._http.post<string>(`${this._coreApi}/check-old-password`, { password }).pipe(
      switchMap((res: any) => {
        return of(res);
      })
    );
  }

  signOut(): Observable<string> {
    return this._http.get<string>(`${this._coreApi}/sign-out`).pipe(
      switchMap((res: any) => {
        this.accessToken = '';
        this.isUserLoggedIn = false;
        return of(res);
      })
    );
  }

  signUp(user: { email: string, name: string, password: string }): Observable<any> {
    return this._http.post(`api/auth/sign-up`, user);
  }

  getUserProfile(): Observable<any> {
    return this._http.get<any>(`${this._coreApi}/profile`).pipe(
      tap((user) => {

      })
    );
  }

}
