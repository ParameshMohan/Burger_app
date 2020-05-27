import React from 'react';

import styles10 from './DrawerToggle.module.css';

const drawerToggle = (props) => (
<div className={styles10.DrawerToggle}  onClick={props.clicked}  > 
    <div></div>
    <div></div>
    <div></div>

</div>
);

export default drawerToggle;