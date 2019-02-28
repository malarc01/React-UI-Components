import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'


function CardContainer(){
    return(
        <div className="cardinfo" >
            <a href="www.reactjs.org"><CardBanner /></a>
            <a href="www.reactjs.org"><CardContent /></a>
        </div>


    );
};

export default CardContainer
