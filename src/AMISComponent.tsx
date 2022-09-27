import React, { useState, useEffect } from 'react';
import { render as renderAmis, Spinner } from 'amis';
import axios from 'axios';

function AMISComponent() {
    const [myJson, setJson] = useState({type: 'page'})
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(false)
    const props = {}
    const env = {theme: 'cxd'}
    const { pathname } = window.location
    useEffect(() => {
      const getJson = async () => {
        setLoading(true)
        const result:any= await axios('https://www.fastmock.site/mock/3d4e3a2f00e8aa0b1620b8d085db43e8/amis/page' + pathname)
        setLoading(false)
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
    } else if(loading) {
      return (
        <div className='amis-content' style={{width: '100%', height: '100%', minHeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={pathname}>
          <Spinner overlay />
        </div>
      )
    } else {
      return (
        <div className='amis-content' key={pathname}>
          {renderAmis(myJson, props, env)}
        </div>
      )
    }
    
}
export default AMISComponent;