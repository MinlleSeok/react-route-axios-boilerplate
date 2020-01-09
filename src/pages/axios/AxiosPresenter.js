import React from "react";

const AxiosPresenter = ({ results }) => {
  return (
    <div id="Axios">
      <p>{JSON.stringify(results)}</p>
    </div>
  );
};

export default AxiosPresenter;
