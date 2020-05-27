import React, { Component }from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';


const withErrorHandler = (WrappedComponent, axios) =>{  // here we need to show this msg only when the wrapped comp has error.(so we use the 2nd arg)
    return class extends Component {
        state ={
            error: null
        }
        componentDidMount(){  // globallly we are handling the axios errors
            this.reqInterceptor = axios.interceptors.request.use(req =>{
                this.setState({ error: null})  // when we are making the request , the error should be null
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
                this.setState({ error: error})
            });
        }

        componentWillUnmount () {
            // console.log('Will Un mount ', this.reqInterceptor,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null})
        }
        render () {
            return(
                <Auxiliary>
                    <Modal 
                    show ={ this.state.error}
                    modalClosed ={this.errorConfirmedHandler}> 
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }
    }
}

export default withErrorHandler;
