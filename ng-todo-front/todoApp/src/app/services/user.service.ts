import { Injectable } from '@angular/core';
import { LOGINRES_INTERFACE } from '../types/login-res.interface';
import { USER_INTERFACE } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setuser(data: LOGINRES_INTERFACE) {
    window.localStorage.setItem('token', `Bearer ${data.token}`)
    window.localStorage.setItem('user', JSON.stringify(data.user))
  }
  getuser(): USER_INTERFACE {
    return JSON.parse(window.localStorage.getItem('user')!);
  }
  gettoken(): string {
    return window.localStorage.getItem('token')!
  }
  get userExist(): boolean {
    return !!this.getuser()
  }

  clear(): void {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }
}
