import React from 'react';
import logo from './logo.svg';
import './App.css';
import { inject, observer } from 'mobx-react';


// inject : 최상단 컴포넌트에서 Provider 설정 시 props로 준 stor를 불려옴
// observer : this.forceUpdate() 를 트리거 해줌
@inject("yourstore")
@observer
export default class App extends React.Component<any> {
  render() {
    return (
      <div>
        <div>value = {this.props.yourstore.yourStore}</div>
        <div>
          <button onClick={this.props.yourstore.changeToWorld}>
            Change to world
          </button>
        </div>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
