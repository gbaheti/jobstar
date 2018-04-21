import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const LinkTabs = (props) => {
  const { tabs } = props;

  return (
    <ul className="link-tabs card">
      {
        tabs.map((t, idx) => (
          <li className="link-tabs__item" key={idx}>
            <NavLink className="link-tabs__link" to={t.href} activeClassName="link-tabs__link--active">
              {t.text}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default LinkTabs;