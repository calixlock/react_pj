import axios from "axios";
import React from "react";
class App extends React.Component {
  state = {
    isLoading: 1,
    movies: [],
  };
  // async 링크를 받아오는 시간이 필요하므로 // 비동기 처리
  getMovies = async () => {
    // await를 통해 기다리고 진행하도록
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "ready"}</div>;
  }
}
export default App;
