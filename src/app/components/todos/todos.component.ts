import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasks: ToDoInterface[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToDo(task: ToDoInterface) {
    this.tasks.push(task)
  }

  deleteTodo(id) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id === id) {
        this.tasks.splice(i, 1);
        return;
      }
    }
  }
  completeAllTodos() {
    this.tasks.forEach((task) => {
      task.complete = true;
    });
  }
}
