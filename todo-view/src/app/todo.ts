export class Todo {
  title: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
