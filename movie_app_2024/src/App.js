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
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    // this.setState({ movies: movies });
    this.setState({ movies, isLoading: 0 });
  };
  componentDidMount() {
    this.getMovies(); // getMovies() 메서드를 호출하여 영화 데이터를 가져오는 비동기 작업을 시작
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : "movies"}</div>;
  }
}
export default App;
