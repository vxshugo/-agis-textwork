import React, {useEffect} from "react";

import {About, Footer, Header, Skills, Testimonial, Work} from "./container";
import {Navbar} from "./components";

import "./App.scss"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import {getPosts} from "./redux/apiCalls";
import {useDispatch} from "react-redux";
import Second from "./pages/Second";

const App = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        const root = JSON.parse(window.localStorage.getItem("persist:root"));

        if (root) {
            getPosts(dispatch);
        }
    },[])

  return(
      <div className="app">
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Main/>
                  </Route>
                  <Route path="/second">
                      <Second/>
                  </Route>
              </Switch>
          </Router>
      </div>
  )
}

export default App