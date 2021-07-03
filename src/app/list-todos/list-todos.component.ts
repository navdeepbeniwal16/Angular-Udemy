import { Component, OnInit } from '@angular/core';

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new ToDo(1, 'Finish Udemy\'s Angular Course', false, new Date()),
    new ToDo(2, 'Make lunch for yourself', true, new Date())
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
