import React from 'react'
import { Container } from "@material-ui/core";
import {
    GetStartedCard,
    NavBreadcrumbs,
    TitleSection,
    PhotoCard

} from '../../components';
//import useStyles from './styles.js'

const SupportUs = () => {
    //const classes = useStyles()
    const crumbs = [
        { name: "Home", href: "/home" },
        { name: "Support Us", href: "/support" },
    ];

    const Images = [
        { src: "/images/photo-of-people-standing-near-window-3184427.png", alt: "team high fiving", heading: 'Donate' },
        { src: "/images/group-smiling-working.png", alt: "group working" },
        { src: "/images/bulletin-board-postits.png", alt: "bulletin board" },
        { src: "/images/man-and-woman-working.png", alt: "girl and guy coding" },
    ];
    return (
        <Container className="containerDefault">
            <NavBreadcrumbs crumbs={crumbs} style={{ fontColor: '#FEFEFE' }} />
            <TitleSection>
                Your Help Goes a Long Way
            </TitleSection>

            <PhotoCard items={Images} />

            <GetStartedCard
                headerTitle="Ready to get started?"
                buttonText="Tag your Project"
                buttonHref="/tag-generator"
            />
        </Container>
    );

}

export default SupportUs;