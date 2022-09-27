import React, { useState, useEffect } from 'react';
import { matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import { AsideNav } from 'amis';

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
  return (
      <div>
          <div className={`cxd-Layout-brandBar`}>
              <Link to="/">
                <div className={`cxd-Layout-brand`} style={{textAlign: 'center', overflow: 'hidden', height: 50}}>
                    <img src={site.logoUrl} style={{width: 120, height: 'auto'}}/>
                    <p className="hidden-folded">{site.name}</p>
                </div>
              </Link>
          </div>
          <div className={`cxd-Layout-headerBar`}>
              <div className="m-l-auto hidden-xs pull-right" style={{position: 'absolute', right: '30px', top: '50%', transform: 'translate(0, -50%)'}}>
                  <span>admin</span>
              </div>
          </div>
      </div>
  );
}

export function renderAside() {  
  const { site } = window
  return (
      <AsideNav
          key={'folded-aside'}
          navigations={[
              {
                  label: '',
                  children: site.menu
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