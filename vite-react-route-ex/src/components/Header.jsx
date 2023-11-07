// import React from 'react'
// themoviedb.org의 데이터 이용
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          {/* 클릭시 이동되는 Link tag 이용 */}
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img
              style={{ width: "154px", height: "20px" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
            />
            <ul>
              <li>
                <Link className="header-nav-item" to="/movie">
                  영화
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="header-nav-item" to="/tv">
                  TV
                </Link>
              </li>
            </ul>{" "}
            <ul>
              <li>
                <Link className="header-nav-item" to="/person">
                  인물
                </Link>
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
}
