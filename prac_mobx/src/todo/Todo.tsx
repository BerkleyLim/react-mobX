import { action, makeObservable, observable } from 'mobx';

export class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title:string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    })
    this.title = title
  }

  toggle() {
    this.finished = !this.finished
  }

  render() {
    return (
      <div>Todo</div>
    )
  }
}

export default Todo