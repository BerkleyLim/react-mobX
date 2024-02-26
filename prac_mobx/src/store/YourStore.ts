import { observable, action } from 'mobx'


// 참조 : https://velog.io/@hadmarine/MobX-with-React-Applying
export default class YourStore {
  // observable : React의 state 와 비슷한 역할 (mobx에서는 변수 역할)
  // javascript 상에서는 let, const, var와 비슷
  @observable yourStore = 'hello';

  // action : React에서 setState의 역할을 수행 함
  // 함수를 커스텀마이징 가능
  @action changeStoreValue = (value: string) => {
    this.yourStore = value;
  }
  
  // action : React에서 setState의 역할을 수행 함
  // 함수를 커스텀마이징 가능
  @action changeToWorld = () => {
    this.yourStore = "world";
  }
}