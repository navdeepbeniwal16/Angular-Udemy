import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public username:string
  public welcomeMessageFromService:string

  constructor(
    private service: WelcomeDataService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      // response => console.log(response)
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("Last line of getWelcomeMessage function");
    return "message";
  }

  getWelcomeMessageWithName(){
    this.service.executeHelloWorldBeanWithPathVariableService(this.username).subscribe(
      // response => console.log(response)
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("Last line of getWelcomeMessage function");
    return "message";
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;    
  }
}
