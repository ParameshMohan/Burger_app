import React from  'react';

import style97 from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [style97.InputElement];
//shouldValidate proptery will be true only if validation item is present for any of the fields like street,name,mail,etc
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(style97.Invalid);
    }
// please observe the code, in className={inputClasses.join(' ')} , it is joining by spaces(' ').

    switch(props.elementType){
        case('input'):
            inputElement = <input
             className={inputClasses.join(' ')} 
             {...props.elementConfig} 
             value={props.value} 
             onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
             className={inputClasses.join(' ')} 
             {...props.elementConfig} 
             value={props.value} 
             onChange={props.changed}/>
            break;
        case('select'):
            inputElement = (
            <select 
                className={inputClasses.join(' ')} 
                value={props.value} onChange={props.changed} > 
                    {props.elementConfig.options.map(option =>(
                <option key={option.value} value={option.value}>
                    {option.displayValue}
                </option>
            ))}
            
            </select>);
            break;
        default:
            inputElement = <input 
             className={inputClasses.join(' ')} 
             {...props.elementConfig} 
             value={props.value} onChange={props.changed}/>
    }
    return (
    <div className={style97.Input}>
        <label className={style97.Label}> {props.label}</label>
        {inputElement}
    </div>
    );

}
    

export default input;