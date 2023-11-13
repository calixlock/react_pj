import React from "react";
import { dummy } from "../movieDummy";
export default function Movies() {
  return (
    <div>
      <div>Movies</div>
      <div className="movie-container">
        {dummy.results.map((item) => {
          return <div>{item.id}</div>;
        })}
      </div>
    </div>
  );
}
