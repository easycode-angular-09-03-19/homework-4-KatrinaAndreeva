import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ToDoInterface[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToDo(todo: ToDoInterface) {
    this.todos.push(todo)
  }

  deleteTodo(id) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].id === id) {
        this.todos.splice(i, 1);
        return;
      }
    }
  }
  completeAllTodos() {
    this.todos.forEach((todo) => {
      todo.completed = true;
    });
  }
}