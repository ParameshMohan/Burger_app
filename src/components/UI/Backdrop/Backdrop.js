import React from 'react';
import styles4 from './Backdrop.module.css';
// import { classes } from 'istanbul-lib-coverage';

const backdrop = (props) => (
    props.show ? <div className={ styles4.Backdrop} 
    onClick ={props.clicked}> </div> : null
);

export default backdrop;