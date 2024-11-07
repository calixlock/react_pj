import React from "react";
class App extends React.Component {
  state = {
    isLoading: 1,
    movies: ["m1", "m2"],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: 0 });
    }, 2000);
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies}</div>;
  }
}
export default App;
