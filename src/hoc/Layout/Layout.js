import React, { Component} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { 
            return  {showSideDrawer: !prevState.showSideDrawer} }
            );
    }
    render () {
        return (
            <Auxiliary>
            <Toolbar drawerToggleClicked = { this.sideDrawerToggleHandler } />
            <SideDrawer open ={this.state.showSideDrawer} closed={ this.sideDrawerClosedHandler} />

             {/* we will be replacing these 3 with their comp */}
                <main className = "Content"> 
                 {this.props.children}

                 
                </main>
    </Auxiliary>
        );

    }
} 


    export default Layout;