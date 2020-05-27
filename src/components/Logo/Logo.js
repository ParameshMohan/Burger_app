import React from 'react';

import burgerLogo from '../../assets/images/original.png'
import styles26 from './Logo.module.css';

const logo = (props) => (
    <div className= { styles26.Logo} style={{height: props.height}} > 
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;
