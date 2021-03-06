import React, { useState } from "react";
import Movie from "../../components/movie"
import style from "./Stockbithome.module.css"
import { withRouter } from "react-router-dom";


function App() {
  // const moviess = ["1", "2", "3"]
  const [movies, setMovies] = useState([]);
  const [seacrhTerm, setSearchTerm] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (seacrhTerm) {
      fetch(`http://www.omdbapi.com?apikey=faf7e5bb&s=${seacrhTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.Search);
        })
        .catch((error) => {
          console.log(error);
        });

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <div className="text-center mt-5">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Search ..."
            value={seacrhTerm}
            onChange={handleOnChange}
          />
        </form>
        <br />
        <div className={style.moviecontainer}>
          {movies.length > 0 ? (
            movies.map((item, index) => {
              return (
                <div className="p-3 shadow" key={index}>
                  < Movie data={item} />
                </div>
              );
            })

          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );

}

export default withRouter(App);