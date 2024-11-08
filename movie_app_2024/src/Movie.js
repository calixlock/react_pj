import PropTypes from "prop-types";
import "./Movie.css";
const Movie = ({ year, title, summary, poster }) => {
  return (
    <div class="movie_data">
      <img src={poster} alt={title} title={title} />
      <h3 class="movie_title">title : {title}</h3>
      <h5 class="movie_year">year : {year}</h5>
      <p class="movie_summary">summary : {summary}</p>
      <hr />
    </div>
  );
};
// props의 데이터 유효성 체크
Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
