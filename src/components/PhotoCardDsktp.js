import React from 'react';
import CardOne from './CardOnePCDsktp'
import CardTwo from './CardTwoPCDsktp'
import CardThree from './CardThreePCDsktp'
import CardFour from './CardFourPCDsktp'
//todo: (1)add links to 3rd and 4th cards. 
//(2)Make sure diff views (mobile) display properly
//(4)Make sure correct buttons linked to the right pages


function PhotoCardDsktp(props) {
    return (
        <>
            <CardOne items={props.items} />
            <CardTwo items={props.items} />
            <CardThree items={props.items} />
            <CardFour items={props.items} />

        </>
    );
}
export default PhotoCardDsktp;