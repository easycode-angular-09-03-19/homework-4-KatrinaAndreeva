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

  ToDoTitle = '';
  ToDoDescription = '';

  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    this.addedToDoItem.emit({
      id: generateId(),
      title: this.ToDoTitle,
      description: this.ToDoDescription,
      complete: false
    });
    
    this.ToDoTitle = '';
    this.ToDoDescription = '';
  }

  
}
