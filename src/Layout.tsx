import React from 'react';
import { ToastComponent, AlertComponent, Layout as AmisLayout } from 'amis';
import { renderAside, renderHeader } from './LayoutUtil'
import AMISComponent from './AMISComponent'

class Layout extends React.Component<any, any> {
  render() {
    return (
      <AmisLayout
        aside={renderAside()}
        header={renderHeader()}
        folded={false}
        offScreen={false}
      >
          <ToastComponent key="toast" position={'top-right'} />
          <AlertComponent key="alert" />
          <AMISComponent />
      </AmisLayout>
    );
  }
}

export default Layout;
