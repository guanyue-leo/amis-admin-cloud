import React, { useState, useEffect } from 'react';
import { matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import { AsideNav } from 'amis';
import axios from 'axios';

function isActive(link: any, location: any) {
  const ret = matchPath(location.pathname, {
      path: link ? link.replace(/\?.*$/, '') : '',
      exact: true,
      strict: true
  });

  return !!ret;
}

export function renderHeader() {
  const { site } = window
  console.log('site2', site)
  return (
      <div>
          <div className={`cxd-Layout-brandBar`}>
              <div className={`cxd-Layout-brand`}>
                  <i className="fa fa-paw"></i>
                  <span className="hidden-folded m-l-sm">amin</span>
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

const navigations = [
  {
    id: 1,
    label: '分类',
    icon: 'fa fa-file',
    children: [
      {
        id: 2,
        path: '/test',
        label: '页面1',
        icon: 'fa fa-file'
      },
      {
        id: 3,
        path: '/hello',
        label: '页面2',
        icon: 'fa fa-file'
      }
    ]
  },
  {
    id: 4,
    label: '分类2',
    icon: 'fa fa-file',
    children: [
      {
        id: 5,
        path: '/aaa',
        label: '页面3',
        icon: 'fa fa-file'
      },
      {
        id: 6,
        path: '/bbb',
        label: '页面4',
        icon: 'fa fa-file'
      }
    ]
  }
]

export function renderAside() {  

  return (
      <AsideNav
          key={'folded-aside'}
          navigations={[
              {
                  label: '',
                  children: navigations
              }
          ]}
          renderLink={(params: any) => {
            const {link, toggleExpand, classnames: cx, depth} = params
            if (link.hidden) {
                return null;
            }

            let children = [];

            if (link.children) {
                children.push(
                    <span
                        key="expand-toggle"
                        className={cx('AsideNav-itemArrow')}
                        onClick={e => toggleExpand(link, e)}
                    ></span>
                );
            }

            link.badge &&
                children.push(
                    <b key="badge" className={cx(`AsideNav-itemBadge`, link.badgeClassName || 'bg-info')}>
                        {link.badge}
                    </b>
                );

            if (link.icon) {
                children.push(<i key="icon" className={cx(`AsideNav-itemIcon`, link.icon)} />);
            }

            children.push(
                <span key="label" className={cx('AsideNav-itemLabel')}>
                    {link.label}
                </span>
            );

            return link.path ? (
              link.active ? (
                  <a>{children}</a>
              ) : (
                  <Link to={link.path[0] === '/' ? link.path : `${link.path}`}>{children}</Link>
              )
            ) : (
                <a
                    onClick={
                        link.onClick ? link.onClick : link.children ? () => toggleExpand(link) : undefined
                    }
                >
                    {children}
                </a>
            );
        }}
        isActive={(link: any) =>
          isActive(link.path && link.path[0] === '/' ? link.path : `${link.path}`, location)
        }
      />
  );
}