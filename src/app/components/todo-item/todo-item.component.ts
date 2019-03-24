import { Component, OnInit, OnChanges, Input, EventEmitter } from '@angular/core';
import { ToDoInterface } from 'src/app/interfaces/todo.interface';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() task: ToDoInterface;
  @Input() toDoCompletes: string;
  @Input() toDeleteToDo: EventEmitter<string> = new EventEmitter<string>();

  completeTag: string;
  constructor() { }

  ngOnInit() {
  this.onCompleteChanges();
  }

  ngOnChanges() {
  this.onCompleteChanges();
  }

  complete() {
    this.task.complete = !this.task.complete;
  }

  delete() {
    const Confirm = confirm("Delete a task?");
    if(confirm) {
      this.toDeleteToDo.emit(this.task.id);
    }
  }

  onCompleteChanges() {
    this.completeTag = this.task.complete ? 'done' : 'undone'; 
  }
}
