import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList = [];
  private inputItem: string;
  
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

  onCreate(): void {
    if (this.inputItem)
      this.todo.addItem(this.inputItem).subscribe(
        data => {
          this.todoList = data;
        }
      )
  }

}
