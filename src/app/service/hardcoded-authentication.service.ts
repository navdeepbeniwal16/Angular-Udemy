import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() { }

  authenticate(username, password) {
    // console.log('Is user logged in (Before) : ' + this.isUserLoggedIn());
    if(username === 'denin16' && password === 'password'){
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('Is user logged in (After) : ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem("authenticatedUser");
  }
}
