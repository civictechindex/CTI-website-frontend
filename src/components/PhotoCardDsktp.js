import React from 'react';
import CardOne from './Card_One_PCDsktp'
//todo: (1)add links to 3rd and 4th cards. 
//(2)Make sure diff views (mobile) display properly
//(3)Probably have to break out code so not so many lines in this file
//(4)Make sure correct buttons linked to the right pages


function PhotoCardDsktp(props) {
    return (
        <>
            <CardOne items={props.items} />
        </>
    );
}
export default PhotoCardDsktp;