import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Layout from './Layout'
import AMISComponent from './AMISComponent'

class APP extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/fullscreen" render={() => <AMISComponent />}/>
          <Route render={() => <Layout />}/>
        </Switch>
      </Router>
    );
  }
}

export default APP;
