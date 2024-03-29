import { computed, makeObservable, observable } from "mobx";

interface TodoType {
  id: string | undefined
  title: string | undefined;
  finished: boolean;
}

// 참조
//https://ko.mobx.js.org/the-gist-of-mobx.html
export class TodoList {
  todos : TodoType[] = []

  get unfinishedTodoCount() {
    return this.todos.filter((todo: TodoType) => !todo.finished).length
  }

  constructor(todos: TodoType[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed
    })
    this.todos = todos
  }

  render() {
    return (
      <div>TodoList</div>
    )
  }
}

export default TodoList