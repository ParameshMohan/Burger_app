import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles16 from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) =>  {
    let attachedClasses = [ styles16.SideDrawer, styles16.Close];
    if(props.open){
        attachedClasses = [ styles16.SideDrawer, styles16.Open];
    }
    return (
        <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>\
            <div className={styles16.Logo}>  
                <Logo />
            </div>
        
            <nav>
               <NavigationItems /> 
            </nav>

        </div>
        </Auxiliary>
    );

};

export default sideDrawer;