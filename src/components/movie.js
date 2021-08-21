import React, { Component } from "react";
import style from "./movie.module.css"
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";


class movie extends Component {
  handleMovieDetail = (id) => {
    console.log(id);
    this.props.history.push(`/stockbitdetail/${id}`);
  };

  render() {
    const { Title, Type, Year, Poster, imdbID } = this.props.data
    console.log(this.props.data);
    return (
      <>
        <Card style={{ margin: "1rem" }}>
          <div className={style.movie}>
            <img src={Poster} alt={Title} />
            <div className={style.movienfo}>
              <h3>{Title}</h3>
              <h4>{Type}</h4>
              <h5>{Year}</h5>
            </div>
            <Button
              className={style.btMoon}
              variant="outline-primary"
              onClick={() => this.handleMovieDetail(imdbID)}
            >
              <div className={style.btCnt}>Details</div>
            </Button>
          </div>
        </Card>
      </>
    )
  }
}
// < p > this is a movie comp</p>;

export default withRouter(movie);
