import React from 'react';
import DonateCardDesktop from './DonateCardDesktop'
import ShareCardDesktop from './ShareCardDesktop'
import VolunteerCardDesktop from './VolunteerCardDesktop'
import FAQCardDesktop from './FAQCardDesktop'

const PhotoCardDskTp = (props) => {
  return (
    <>
      <DonateCardDesktop items={props.items} />
      <ShareCardDesktop items={props.items} />
      <VolunteerCardDesktop items={props.items} />
      <FAQCardDesktop items={props.items} />
    </>
  );
}
export default PhotoCardDskTp;
