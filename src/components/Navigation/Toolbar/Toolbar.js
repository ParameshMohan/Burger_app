import React from 'react';
import styles6 from './Toolbar.module.css';
import styles16 from '../SideDrawer/SideDrawer.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) =>(
    <header className={ styles6.Toolbar }> 
        < DrawerToggle clicked= {props.drawerToggleClicked} /> 
        <div className={styles6.Logo}>
            <Logo />
        </div>
        <nav className= {styles16.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;