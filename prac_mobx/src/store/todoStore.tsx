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
// 참조2 : https://chanyeong.com/blog/post/8 (typescript 기반)
const TodoListView = observer(({todoList}: TodoListClassType) => (
  <div>
    <ul>
      {todoList.todos.map(todo => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
))

const TodoView = observer(({todo}: TodoClassType) => (
  <li>
    <input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
    {todo.title}
  </li>
))

const store : any = new TodoList([new Todo("Get coffee"), new Todo("Write simpler code")])
render(<TodoListView todoList={store} />)
document.getElementById('mobX')