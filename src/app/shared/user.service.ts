import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export interface User {
  username: string;
  token: string;
}

@Injectable({providedIn: 'root'})
export class UserService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get singedInUser(): User {
    return this.currentUserSubject.value;
  }

  isValid(): boolean {
    return !!this.currentUserSubject.value;
  }

  singIn(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  singUp(username: string, password: string, confirmPassword: string) {
    return this.http.post<any>(`${environment.apiUrl}/users`, {username, password, confirmPassword});
  }

  singOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
