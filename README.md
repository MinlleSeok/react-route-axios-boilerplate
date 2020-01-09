# react-route-axios-boilerplate

- React.js
- react-router-dom 라이브러리
- axios 라이브러리

## app/index.js

```js
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
```

## axios api 관리

### agent/index.js

```js
import axios from 'axios';

const Agent = {
    get_api: () => {
        return axios.get("https://jsonplaceholder.typicode.com/todos/1")
                .then(response => response.data)
                .catch(err => console.log(err));
    }
}

export default Agent;
```

## Container(로직)과 Presenter(뷰) 분리

### AxiosContainer.js

```js
import React, { useState, useEffect } from "react";
import AxiosPresenter from "./AxiosPresenter";
import Agent from "../../agent";

const AxiosContainer = () => {
  // 함수형 컴포넌트에서 state를 사용할 때,
  // useState Hook 사용
  // 초기값 설정 state = { api_result: null }
  const [state, setState] = useState({ api_result: null });

  // ES6(ECMAScript2015)특징 - Destructuring assignment(구조분해 할당) 이용하여 변수 꺼내기
  const { api_result } = state;

  // 컴포넌트 렌더링 완료 후 실행하는 Hook 함수
  useEffect(() => {
    // 한 번만 호출을 체크
    let ignore = false;

    // Agent에서 관리하는 api 비동기로 호출하는 함수
    // 꺼내진 값은 setState()로 state를 갱신해줍니다.
    const get_api = async () => {
      const results = await Agent.get_api();
      if (!ignore) setState({ api_result: results });
    };

    get_api();

    // 닫는 함수로 한 번만 호출을 체크
    return () => { ignore = true };

    // }, []); <= 두 번째 인자에 빈 배열을 넣을 시 오직 한 번만 호출합니다.
  }, []);

  return api_result ? (
    <AxiosPresenter results={api_result} />
  ) : (
    <div>Loading...</div>
  );
};

export default AxiosContainer;
```

### AxiosPresenter.js

```js
import React from "react";

const AxiosPresenter = ({ results }) => {
  // 설명용 더미 배열
  const dummy = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

  return (
    <div id="Axios">
      {/*
       * results가 객체인 경우에는
       * {JSON.stringify(results)} // JSON 문자열화
       * {results.title} // 객체 안의 문자열 값
       */}
      <h2>results가 객체인 경우</h2>
      <p>{results.title}</p>
      {/*
       * results가 배열인 경우에는
       * {dummy.map((item, index) => <p key={index}>{item.a}</p>)} // 배열 map()
       */}
      <hr />
      <h2>results가 배열인 경우</h2>
      {dummy.map((item, index) => (
        <p key={index}>{item.a}</p>
      ))}

      {/*
       * jsx 렌더 시
       * []안의 마크업 태그들을 출력해주는 모습
       */}
      <hr />
      <h2>jsx 렌더 시, []안의 마크업 태그들을 출력해주는 모습</h2>
      {[<u key={1}>ss</u>, <li key={2}>zz</li>, <b key={3}>gg</b>]}
    </div>
  );
};

export default AxiosPresenter;
```

<!-- ## 구조 structure

```t

``` -->

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
