import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/todo.interface';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit, OnChanges {
  @Input() todo: ToDoInterface;
  @Input() toDoCompletes: string;
  @Output() toDeleteToDo: EventEmitter<string> = new EventEmitter<string>();

  completeTag: string;
  
  constructor() { }

  ngOnInit() {
  this.onCompleteChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.todo.completed = changes["toDoCompletes"].currentValue;
  this.onCompleteChanges();
  }

  complete() {
    this.todo.completed = !this.todo.completed;
  }

  delete() {
    const Confirm = confirm("Delete a task?");
    if(confirm) {
      this.toDeleteToDo.emit(this.todo.id);
    }
  }

  onCompleteChanges() {
    this.completeTag = this.todo.completed ? 'done' : 'undone'; 
  }
}