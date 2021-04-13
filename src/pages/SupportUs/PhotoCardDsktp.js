import React from 'react';
import CardOne from './CardOnePCDsktp'
import CardTwo from './CardTwoPCDsktp'
import CardThree from './CardThreePCDsktp'
import CardFour from './CardFourPCDsktp'

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