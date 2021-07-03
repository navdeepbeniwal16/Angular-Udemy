import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'denin16';
  password = '';

  errorMessage = 'User is Invalid'
  isInvalidUser = false;

  constructor(
    private router : Router,
    private hardcodedAuhenticator: HardcodedAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuhenticator.authenticate(this.username,this.password)){
      this.isInvalidUser = false;

      //Route to the welcome component
      this.router.navigate(['welcome', this.username])
    } else {
      this.isInvalidUser = true;
    }
  }

}
