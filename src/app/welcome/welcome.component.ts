import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'This is a message string'

  constructor() { }

  ngOnInit(): void {
    this.message = 'This is another message string';
    // this.message = 5; //This will throw a compilation error
  }
}
