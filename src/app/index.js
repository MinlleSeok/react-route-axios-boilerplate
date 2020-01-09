import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "../pages/home";
import AxiosContainer from "../pages/axios";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/axios" component={AxiosContainer} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨 404 page error 출력
          render={({ location }) => (
            <div className="page-404">
              <h1>error-404</h1>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
