import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Details.css";
//import Loading from "./Loading.js";

export default function Details(props) {
  const [shows, setShow] = useState({});
  //Get id from url
  const tvShowId = props.match.params.tvShow;
  console.log(tvShowId)
  useEffect(() => {
    fetch('/rest/shows')
      .then(response => response.json())
      .then(list => {
        setShow(list.find(tvShow => tvShow.id === tvShowId));
      });
  }, [tvShowId]);

  if (shows === undefined) {
    return <Redirect to="/Not-found" />;
  } else {
    return (
      <div className="details">
        <div className="details-container">
          <h1 className="details-header">{shows.name}</h1>
          <br />
          <br />
          <div className="details-info">
            <p className="details-text">{shows.description}</p>
            {/* <img class="thumbnail" src={require(`../images/${shows.id}.jpg`)} alt={`${shows.name}`} /> */}
          </div>
          <Link className="Home-Page-Link" to="/">
            Return to Home Page
          </Link>
        </div>
      </div>
    );
  }
}
