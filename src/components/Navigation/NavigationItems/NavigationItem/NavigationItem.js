import React from 'react';
import {NavLink} from 'react-router-dom';

import styles9 from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={styles9.NavigationItem}>
         <NavLink
         to={props.link}
         exact={props.exact}
         activeClassName={styles9.active}
       > {props.children} </NavLink>
    </li>
);

export default navigationItem;