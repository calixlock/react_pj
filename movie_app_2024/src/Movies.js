import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div class="movie_data">
      <h3 class="movie_title">title : {title}</h3>
      <h5 class="movie_year">year : {year}</h5>
      <p class="movie_summary">summary : {summary}</p>
      {/* <h4>poster : {poster}</h4> */}
      <hr />
    </div>
  );
};
// props의 데이터 유효성 체크
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  // poster: PropTypes.string.isRequired,
};

export default Movie;
