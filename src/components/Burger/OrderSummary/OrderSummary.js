import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this could be a functional component , doesnt have to be a class
    componentWillUpdate() {
        console.log('[OrderSummarywillupdate]');

    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
        return (
        <li key= {igKey}>
            <span  style ={{testTrasform: 'capitalize'}}> {igKey}</span>: {this.props.ingredients[igKey]}
        </li>)
        });
        return (
            <Auxiliary>
            <h3> Your Order</h3>
            <p> A delicious Burger with the following ingredients: </p>
            <ul>
               { ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong>  </p>
            <p> Continue to Checkout ? </p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}> CANCEL </Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE </Button>
        </Auxiliary>
        );

    }
}

export default OrderSummary;;