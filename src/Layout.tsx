import React from 'react';
import { ToastComponent, AlertComponent, Layout as AmisLayout } from 'amis';
import { renderAside, renderHeader } from './LayoutUtil'
import AMISComponent from './AMISComponent'

function Layout() {
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

export default Layout;
