import React, { Component } from 'react';
import styles3 from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
            return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    
    }
    componentWillUpdate(){
        console.log('[Modal] WillUpdate');

    }
    render(){
        return(
            <Auxiliary>
                 <Backdrop show ={this.props.show}  clicked ={this.props.modalClosed}/>
                    <div 
                        className={styles3.Modal}
                        style = {{ 
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
// vh is view port height: it will slide iy outside the screen.
                        opacity: this.props.show ? '1' : '0'
        // if true 1: visible and 0: not visisble when false.
                            }}>
                        {this.props.children}
                    </div>
            </Auxiliary>
        );
    }
} 

export default Modal;