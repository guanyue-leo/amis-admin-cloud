import React, { useState, useEffect } from 'react';
import { render as renderAmis } from 'amis';
import axios from 'axios';

function AMISComponent() {
    const [myJson, setJson] = useState({type: 'page'})
    const [notFound, setNotFound] = useState(false)
    const props = {};
    const env = {};
    const { pathname } = window.location;
    useEffect(() => {
      const getJson = async () => {
        const result:any= await axios('https://www.fastmock.site/mock/3d4e3a2f00e8aa0b1620b8d085db43e8/amis/page' + pathname)
        const res = result.data
        if(res?.code === 200) {
          setJson(res?.data)
          setNotFound(false)
        } else {
          setJson({type: 'page'})
          setNotFound(true)
        }
      }
      getJson()
    }, [pathname])
    if(notFound) {
      return (
        <>
          404
        </>
      )
    } else {
      return (
        <>
          {renderAmis(myJson, props, env)}
        </>
      )
    }
    
}
export default AMISComponent;