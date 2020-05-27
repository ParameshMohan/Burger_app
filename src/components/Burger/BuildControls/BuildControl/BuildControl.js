import React from 'react'
import styles1 from './BuildControl.module.css';

const buildControl =(props) => (
    <div className={styles1.BuildControl} >
        <div className={styles1.Label}> {props.label}</div>
        <button 
        className={styles1.Less} 
        onClick={props.removed} 
        disabled={props.disabled}> Less</button>

        <button 
        className={styles1.More}
        onClick={ props.added}> More</button>
    </div>
);

export default buildControl;