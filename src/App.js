import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import StockbitHome from "./pages/Stockbithome/Stockbithome"
import StockbitDetail from "./pages/Stockbitdetail/Stockbitdetail"
import Main from "./pages/main/main"
import Jajal from "./pages/jajal"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route
                path="/jajal"
                exact
                component={Jajal}
              />
              <Route
                path="/"
                exact
                component={Main}
              />
              <Route
                path="/stockbithome"
                exact
                component={StockbitHome}
              />
              <Route
                path="/stockbitdetail/:id"
                exact
                component={StockbitDetail}
              />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
