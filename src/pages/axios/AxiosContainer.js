import React, { useState, useEffect } from 'react';
import AxiosPresenter from './AxiosPresenter';
import Agent from '../../agent';

const AxiosContainer = () => {

  const [ state, setState ] = useState({ api_result: null });

  const { api_result } = state;

  const get_api = async () => {
    const results = await Agent.get_api();
    setState({ api_result: results });
  }

  useEffect(() => {
    get_api();
  }, []);

  return (api_result ? <AxiosPresenter results={api_result} /> : <div>Loading...</div>);
};

export default AxiosContainer;