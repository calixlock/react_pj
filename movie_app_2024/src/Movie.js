import PropTypes from "prop-types";
import "./Movie.css";
const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie_title">title : {title}</h3>
      {/* <h5 className="movie_genre">genre : {genres}</h5> */}
      <ul className="movie_genres">
        {genres.map((e, idx) => {
          return (
            <li key={idx} className="movie_genre">
              {e}
            </li>
          );
        })}
      </ul>

      <h5 className="movie_year">year : {year}</h5>
      <p className="movie_summary">summary : {summary}</p>
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
