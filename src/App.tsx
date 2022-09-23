import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastComponent, AlertComponent, Layout } from 'amis';
import { renderAside, renderHeader } from './Layout'
import AMISComponent from './AMISComponent'

class APP extends React.Component<any, any> {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default APP;
