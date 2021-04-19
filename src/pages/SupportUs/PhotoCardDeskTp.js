import React from 'react';
import DonateCardDeskTp from './DonateCardDeskTp'
import ShareCardDeskTp from './ShareCardDeskTp'
import VolunteerCardDeskTp from './VolunteerCardDeskTp'
import FAQCardDeskTp from './FAQCardDeskTp'

const PhotoCardDskTp = (props) => {
  return (
    <>
      <DonateCardDeskTp items={props.items} />
      <ShareCardDeskTp items={props.items} />
      <VolunteerCardDeskTp items={props.items} />
      <FAQCardDeskTp items={props.items} />
    </>
  );
}
export default PhotoCardDskTp;
