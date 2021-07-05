import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { 
    
  }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloWorldBean');
  }

  executeHelloWorldBeanWithPathVariableService(name: string){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorld/path-variable/${name}`);
  }
}
