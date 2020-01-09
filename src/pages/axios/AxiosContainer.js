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
