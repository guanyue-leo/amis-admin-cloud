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
      }
    ]
  }
};
const props = {};
const env = {};
import React from 'react';
import { render as renderAmis } from 'amis';

class AMISComponent extends React.Component<any, any> {
  
  render() {
    return renderAmis(
      myJson,
      props,
      env
    );
  }
}
export default AMISComponent;