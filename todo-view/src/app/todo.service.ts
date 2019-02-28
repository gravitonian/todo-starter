import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';

const BASE_PATH = '/local_server/api/v1';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) {
  }

  public getAllTodos(): Observable<Todo[]> {
    console.log('TodoService::getAllTodos was called');

    return this.http.get<Todo[]>(BASE_PATH + '/todos') as Observable<Todo[]>;
  }

  public insertTodo(todo: Todo): void {
    console.log('TodoService::insertTodo was called: ' + todo.title);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(BASE_PATH + '/todos', todo, { headers: headers }).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });
  }

  public searchTodos(searchText: string): Observable<Object[]> {
    console.log('TodoService::searchTodos was called: ' + searchText);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      BASE_PATH + '/search',
      { searchText: searchText },
      { headers: headers }) as Observable<Object[]>;
  }
}
