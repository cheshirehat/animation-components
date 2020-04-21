import React from "react";
import "./scss/home.scss"

export const Home: React.FC = () => {
  return (
    <div className="home">
      <li><a href="/bar">bar</a></li>
      <li><a href="/circle">circle</a></li>
    </div>
  )
}
