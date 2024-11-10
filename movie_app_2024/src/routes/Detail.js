import { useLocation } from "react-router-dom";
function Detail() {
  const location = useLocation();
  const { year, title, summary, poster, genres } = location.state;
  console.log();
  return (
    <div>
      <h1>title : {title}</h1>
      <h1>year : {year}</h1>
      <h1>{summary}</h1>
      <img src={poster} />
      <h1>{genres}</h1>
      {/* 나머지 상세 정보 표시 */}
    </div>
  );
}
export default Detail;
