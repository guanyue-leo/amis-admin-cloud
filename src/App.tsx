import React from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';

import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';

import axios from 'axios';

import {render as renderAmis, ToastComponent, AlertComponent, Button, AsideNav, Layout, confirm} from 'amis';
import {alert, toast} from 'amis-ui';

// amis 环境配置
const myJson = {
  type: 'page',
  body: {
    type: 'form',
    api: '/api/form',
    body: [
      {
        type: 'input-text',
        name: 'name',
        label: '姓名'
      },
      {
        name: 'email',
        type: 'input-email',
        label: '邮箱'
      },
      {
        name: 'color',
        type: 'input-color',
        label: 'color'
      },
      {
        type: 'editor',
        name: 'editor',
        label: '编辑器'
      }
    ]
  }
};
const props = {};
const env = {};

class AMISComponent extends React.Component<any, any> {
  render() {
    return renderAmis(
      myJson,
      props,
      env
    );
  }
}

function renderHeader() {
  return (
      <div>
          <div className={`cxd-Layout-brandBar`}>
              <div className={`cxd-Layout-brand`}>
                  <i className="fa fa-paw"></i>
                  <span className="hidden-folded m-l-sm">amis-admin-cloud</span>
              </div>
          </div>
          <div className={`cxd-Layout-headerBar`}>
              <div className="m-l-auto hidden-xs pull-right" style={{position: 'absolute', right: '30px', top: '50%', transform: 'translate(0, -50%)'}}>
                  <span>admin</span>
              </div>
          </div>
      </div>
  );
}

function renderAside() {
  const navigations = []

  return (
      <AsideNav
          key={'folded-aside'}
          navigations={[
              {
                  label: '',
                  children: navigations
              }
          ]}
      />
  );
}

class APP extends React.Component<any, any> {
  render() {
    return (
      <>
        <Layout
          aside={renderAside()}
          header={renderHeader()}
          folded={false}
          offScreen={false}
        >
            <ToastComponent key="toast" position={'top-right'} />
            <AlertComponent key="alert" />
            <AMISComponent />
        </Layout>
      </>
    );
  }
}

export default APP;
