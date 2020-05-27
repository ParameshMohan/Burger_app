import React from 'react';

import styles8 from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={ styles8.NavigationItems}>
        
        <NavigationItem link ="/" exact> Burger Builder </NavigationItem>
        <NavigationItem link ="/orders"> Orders  </NavigationItem>
    </ul>
);

export default navigationItems;