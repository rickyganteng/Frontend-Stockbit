import React, { useState } from "react";
import Movie from "../../components/movie"
import style from "./main.module.css"
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button, Table, Card, InputGroup, FormControl, Container } from "react-bootstrap"


import Logo from "../../assets/logo/uawrbab.png"

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

  const rp = require('request-promise');
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API
    },
    json: true,
    gzip: true
  };

  rp(requestOptions).then(response => {
    console.log('API call response:', response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <Container>

        <h1 > Market Pasar</h1>
        <Row>
          <Col>
            <Button><p>button</p></Button>
          </Col>
          <Col>
            <Button><p>button</p></Button>
          </Col>
          <Col>
            <Button><p>button</p></Button>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead >
            <tr>
              {/* <th>#</th> */}
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24%</th>
              <th>7d%</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
              <th>Circulating Supply</th>
              <th>Last 7 Days</th>

            </tr>
          </thead>


          {/* {dataSiswa.map((item, index) => {
            return ( */}
          <tbody>

            <tr >
              <td>1</td>
              <td><p>COMODO</p></td>
              <td><p>$0.0013</p></td>
              <td><p>+10%</p></td>
              <td><p>+50%</p></td>
              <td><p>$10.00000</p></td>
              <td><p>$10000.00000</p></td>
              <td><p>10000000000000 CMD</p></td>
              <td><p>grafik</p></td>
            </tr>
            <tr >
              <td>2</td>
              <td><p>BITCOIN</p></td>
              <td><p>$1000</p></td>
              <td><p>-10%</p></td>
              <td><p>+50%</p></td>
              <td><p>$1000.00000</p></td>
              <td><p>$2300000.00000</p></td>
              <td><p>10000000000000 BTC</p></td>
              <td><p>grafik</p></td>
            </tr>
            <tr >
              <td>3</td>
              <td><p>BINANCE COIN</p></td>
              <td><p>$100.92</p></td>
              <td><p>-3%</p></td>
              <td><p>-5%</p></td>
              <td><p>$400.00000</p></td>
              <td><p>$110000.00000</p></td>
              <td><p>12340000000000 BNB</p></td>
              <td><p>grafik</p></td>
            </tr>
          </tbody>


        </Table>

        <h1 > Convert</h1>
        <div className={style.borderCard}>
          <Card

            style={{ width: "350px", height: "290px" }}
          >
            <Card.Body>
              <div className="d-flex flex-row justify-content-center">
                <div>
                  <Form className="text-center mt-5">
                    <Row >
                      <Col >
                        <InputGroup>
                          <InputGroup.Text><img src={Logo} /> CMD</InputGroup.Text>
                          <FormControl
                            type="number"
                            placeholder="0"
                            name="premiereName"
                          // value={premiereName}
                          // onChange={(event) => this.changeTextForm(event)}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                      <Col >
                        <InputGroup >
                          <InputGroup.Text><img src={Logo} /> CMD</InputGroup.Text>
                          <FormControl
                            type="number"
                            placeholder="0"
                            name="premiereName"
                          // value={premiereName}
                          // onChange={(event) => this.changeTextForm(event)}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Form>
                </div>

              </div>



            </Card.Body>
            <br />
            <br />
            <br />
          </Card>
        </div>
        <div className="text-center mt-5">
          <Form className="text-center mt-5">
            <Row >
              <Col >
                <InputGroup>
                  <InputGroup.Text><img src={Logo} /> CMD</InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder="0"
                    name="premiereName"
                  // value={premiereName}
                  // onChange={(event) => this.changeTextForm(event)}
                  />
                </InputGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col >
                <InputGroup >
                  <InputGroup.Text><img src={Logo} /> CMD</InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder="0"
                    name="premiereName"
                  // value={premiereName}
                  // onChange={(event) => this.changeTextForm(event)}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );

}

export default withRouter(App);