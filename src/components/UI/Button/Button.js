import React from 'react';
import styles5 from './Button.module.css';

const button = (props) => (
<button
disabled={props.disabled}
className={[styles5.Button,styles5[props.btnType]].join(' ')}
onClick={props.clicked}> {props.children}</button>
);

export default button;