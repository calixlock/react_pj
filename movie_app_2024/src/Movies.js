import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div>
      <h4>id : {id}</h4>
      <h4>year : {year}</h4>
      <h4>title : {title}</h4>
      {/* <h4>summary : {summary}</h4> */}
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
