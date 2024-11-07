import React from "react";

//react의 component 상속
class App extends React.Component {
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
