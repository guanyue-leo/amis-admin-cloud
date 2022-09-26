import React, { useState, useEffect } from 'react';
import { render as renderAmis } from 'amis';
import axios from 'axios';

function AMISComponent() {
    const [myJson, setJson] = useState({type: 'page'})
    const props = {};
    const env = {};
    console.log('site3', window.site)
    useEffect(() => {
      const getJson = async () => {
        const res = await axios('https://www.fastmock.site/mock/3d4e3a2f00e8aa0b1620b8d085db43e8/amis/page')
        setJson(res.data?.data)
      }
      getJson()
      console.log('myJson', myJson)
    }, [])
    return (
      <>
        {renderAmis(myJson, props, env)}
      </>
    )
}
export default AMISComponent;