import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';
import axios from 'axios'
declare global {
  interface Window {
    site: any
  }
}

const getSite = async () => {
  const { host } = window.location;
  const res = await axios('https://www.fastmock.site/mock/3d4e3a2f00e8aa0b1620b8d085db43e8/amis/site?host=' + host)
  window.site = res.data?.data
  console.log('site-index', window.site)
  ReactDOM.render(<APP />, document.getElementById('root'));
}
getSite()
