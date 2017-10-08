import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList = [];
  
  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.todo.getList().subscribe(
      data => {
        this.todoList = data;
      }
    )
  }

  onDelete(id): void {
    this.todo.deleteItem(id).subscribe(
      data => {
        this.todoList = data;
      }
    )
  }

  onCreate(text: string): void {
    this.todo.addItem(text).subscribe(
      data => {
        this.todoList = data;
      }
    )
  }

}
