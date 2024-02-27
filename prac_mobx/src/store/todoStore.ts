import { observer } from "mobx-react-lite";
import TodoList from "../todo/TodoList";
import Todo from "../todo/Todo";
import { render } from "react-dom";


interface TodoType {
  id: string | undefined
  title: string | undefined;
  finished: boolean;
}

interface TodoClassType {
  todo: Todo
}

interface TodoListClassType {
  todoList: TodoList
}

const TodoListView = observer(({todoList}: TodoListClassType) => (
  <div>
    <ul>
      {todoList.todos.map(todo as TodoType => (
        <TodoView todo={todo} key={todo.id}
      )}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
))

const TodoView = observer(({todo}: TodoClassType) => (
  <li>
    <input type="checkbox" checked={todo.finished} onclick={() => todo.toggle()} />
    {todo.title}
  </li>
))

const store  = new TodoList([new Todo("Get coffee"), new Todo("Write simpler code")])
render(<TodoListView todoList={store} />)
document.getElementById('mobX')