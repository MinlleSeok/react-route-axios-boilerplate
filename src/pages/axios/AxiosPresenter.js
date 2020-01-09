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
