import React from 'react';

import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) =>{
   

    let transformedingredients = Object.keys(props.ingredients) // [ salad,cheese,meat]
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />;
        });
        
    })
    .reduce((arr,el) => {
        return arr.concat(el);
    },[]);

    //console.log (transformedingredients);
    // _ is an emppty space and i is the index.

    if(transformedingredients.length === 0){
        transformedingredients = <p> Please start adding ingredients!!</p>
    }
    return(
        <div className="Burger" >
            <BurgerIngredients type ="bread-top"/>
            {transformedingredients}
            <BurgerIngredients type ="bread-bottom"/>

        </div>

    );
};

export default burger;