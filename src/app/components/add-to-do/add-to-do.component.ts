import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/todo.interface';
import { generateId } from '../generateID/generateID';


@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  @Output() addedToDoItem: EventEmitter<ToDoInterface> = new EventEmitter<ToDoInterface>();

  TodoName = '';
  TodoDescription = '';

  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    this.addedToDoItem.emit({
      id: generateId(),
      name: this.TodoName,
      description: this.TodoDescription,
      completed: false
    });
    
    this.TodoName = '';
    this.TodoDescription = '';
  }

  
}