import React, { Component } from "react";
import style from "./Stockbitdetail.module.css"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getmoviebyId } from "../../../redux/action/movie"
import { Container, Row, Col, Button } from "react-bootstrap";
class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbID: this.props.match.params.id,
      data: {
        Genre: "",
        Title: "",
        Poster: "",
        Actors: "",
        Director: "",
        Production: "",
        imdbRating: "",
        imdbVotes: "",
        Released: "",
        Plot: "",
      },
    };
  }

  componentDidMount() {
    const { imdbID } = this.state
    this.props.getmoviebyId(imdbID).then((res) => {
      this.setState({
        data: {
          ...this.state.data,
          ...res.action.payload.data
        },
      });
    })
  };
  backpage = () => {
    this.props.history.goBack()
  };

  getData = () => {
    const { imdbID } = this.state;

    this.props.getmoviebyId(imdbID);
  };
  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {

    const {
      Genre,
      Poster,
      Title,
      Actors,
      Director,
      Production,
      imdbRating,
      imdbVotes,
      Released,
      Plot,
    } = this.state.data
    return (
      <>
        <Container className="mt-3">
          <Row>
            <Col sm={3} className="mt-4">
              <div className={style.hero}>
                <img className={`${style.movie} p-4`} src={Poster} alt={Title} fluid />
              </div>
            </Col>
            <Col sm={9} className="mt-4">
              <div className="text-sm-left text-center mb-4">
                <h5>Title :</h5>
                <p className={style.title}>{Title}</p>
                <h5>Genre :</h5>
                <p className={style.semiTitle}>{Genre}</p>
              </div>
              <div className="text-sm-left text-center mb-4">
                <h6 className={style.semi}>Actors :</h6>
                <p className={style.semiBlack}>{Actors}</p>
              </div>
              <div className={style.spacec}>
                <div className={style.space}>
                  <h6 className={style.semi}>Director :</h6>
                  <p className={style.semiBlack}>{Director}</p>
                </div>
                <div className={style.space}>
                  <h6 className={style.semi}>Production :</h6>
                  <p className={style.semiBlack}>{Production}</p>
                </div>
                <div className={style.space}>
                  <h6 className={style.semi}>Released :</h6>
                  <p className={style.semiBlack}>{Released}</p>
                </div>
              </div>

              <div className={style.spacec2}>
                <div className={style.space}>
                  <h6 className={style.semi}>IMDB Votes :</h6>
                  <p className={style.semiBlack}>{imdbVotes}</p>
                </div>
                <div className={style.space}>
                  <h6 className={style.semi}>IMDB Rating :</h6>
                  <p className={style.semiBlack}>{imdbRating}</p>
                </div>
              </div>

            </Col>
          </Row>
          <div>
            <h4>Sysnopsis</h4>

            <p className={style.semiBlack}>{Plot}</p>
          </div>
          <Button
            onClick={() => this.backpage()}
          >
            Back
          </Button>

        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getmoviebyId
};
export default connect(null, mapDispatchToProps)(withRouter(detail));