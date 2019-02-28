import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
  searchText: string;
  public todos$: Observable<Todo[]>;
  searchResult$: Observable<Object[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = todoService.getAllTodos();
  }

  addTodo(): void {
    this.todoService.insertTodo(this.newTodo);
    this.newTodo = new Todo();
    // Refresh list
    this.todos$ = this.todoService.getAllTodos();
  }

  searchTodos(): void {
    this.searchResult$ = this.todoService.searchTodos(this.searchText);
  }
}
