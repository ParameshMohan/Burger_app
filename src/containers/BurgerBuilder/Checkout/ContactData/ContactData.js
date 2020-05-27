import React, { Component } from "react";
import {connect } from 'react-redux';

import Button from '../../../../components/UI/Button/Button';
import styles99 from './ContactData.module.css'
import axios from '../../../../axios-orders';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import Input from '../../../../components/UI/Input/Input';

class ContactData extends Component{
state = {
    orderForm : {
        name:{
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'Your Name'
            },
            value: '',
            validation :{
                required:'true'
                },
            valid: false,
            touched: false
        } ,
        street: {
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'Street'
            },
            value: '',
            validation :{
                required:'true',
                },
                valid: false,
                touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'ZIP code'
            },
            value: '',
            validation :{
                required:'true',
                minLength: 5,
                maxLength: 5
                },
                valid: false,
                touched: false
        },
        country:{
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'Country'
            },
            value: '',
            validation :{
                required:'true'
                },
                valid: false,
                touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type:'email',
                placeholder:'Your E-Mail'
            },
            value: '',
            validation :{
                required:'true'
                },
                valid: false,
                touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
              options:[
                  { value:'fastest', displayValue:'Fastest'},
                  { value:'cheapest', displayValue:'Cheapest'},

                ]
            },
            // value: '',
            validation:'',
            valid:true
        }
    },
    formIsValid:false,
    loading:false
}

orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({ loading: true}) // when we clik on continue--> loading should be true --> to oget displayed
    const formData = {};
    //formElementIdentifier is just name,street,zipcode etc
    for(let formElementIdentifier in this.state.orderForm){
        formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
          //alert('You continue!!');
        const order = {
            ingredients : this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
        .then( response => {
            this.setState({loading: false}); // when the request is completed , or done --> loading should tiurn false
            this.props.history.push('/');
            //we are passing contact data by render method and not by component.hence here to make this history object work , we have to pass the propsf from checkout comp.
        })
        .catch( error => {
            this.setState({loading: false}); // even if we get error, we need the loading symbol
        });

    // console.log(this.props.ingredients);
}
checkValidity (value,rules){
    let isValid = true;

    if(rules.required){
        isValid =value.trim() !== '' && isValid; // trim i used to identify the white space in the begining and end
        // if value.trim in unequal to '' then isvalid is true
        }
    if(rules.minLength){
        isValid=value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
        isValid=value.length <= rules.maxLength && isValid;
    }
    return isValid;
}
inputChangeHandler =(event, inputIdentifier) =>{
    const updatedOrderForm = {
        ...this.state.orderForm
    } // here we cannot clone/copy the inner obejct itmes, hence the below code
    // we take the clone of the orderForm and not the orginal one
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    

    let formIsValid = true;
    for(let inputIdentifier in updatedOrderForm){
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid});

}
render (){
    const formElementArray =[];
    for(let key in this.state.orderForm){
        formElementArray.push({
            id:key,
            config: this.state.orderForm[key]
        })
    }
    let form= (
        <form onSubmit={ this.orderHandler}>
       
       {formElementArray.map(formElement =>(
           <Input 
           key={formElement.id}
           elementType={formElement.config.elementType}
           elementConfig={formElement.config.elementConfig}
           value={formElement.config.value}
           invalid= {!formElement.config.valid}
           shouldValidate={formElement.config.validation}
           touched={formElement.config.touched}
           changed={(event) => this.inputChangeHandler(event,formElement.id)}
           />
       ))}
        <Button btnType="Success" disabled={!this.state.formIsValid} > ORDER</Button>
    </form>
    );
    if(this.state.loading){
        form= <Spinner />;
    }
    return(
        <div className={styles99.ContactData}>
            <h4> Enter your Contact Data</h4>
            {form}
        </div>
    )
}

}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect (mapStateToProps)(ContactData);