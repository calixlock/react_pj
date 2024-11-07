import React from "react";

//react의 component 상속
class App extends React.Component {
  //class 생성 시 constructor 호출
  constructor(props) {
    super(props);
    console.log("constructor !");
  }
  // 최초 실행 시 render 된 후
  componentDidMount() {
    console.log("componentDidMount !");
  }
  // update 될때만 reder 된 후
  componentDidUpdate() {
    console.log("componentDidUpdate !");
  }
  // 컴퍼넌트가 화면에서 떠날때 실행됨
  componentWillUnmount() {
    console.log("componentWillUnmout !");
  }
  state = {
    count: 0,
  };
  add = () => {
    // this.state.count += 1;
    // this.setState({ count: this.state.count + 1 });
    this.setState((e) => ({ count: e.count + 1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("render !");
    return (
      <div>
        <h1> number : {this.state.count}</h1>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}
export default App;
