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
        { src: "/images/photo-of-people-standing-near-window-3184427.png", alt: "team high fiving" },
        { src: "/images/girlandguyCoding.png", alt: "girl and guy coding", children: "Make your project more visible with GitHub’s open-source communities" },
        { src: "/images/groupCoding.png", alt: "group coding", children: "The Index is owned by all who contribute to it" },
    ];
    return (
        <Container className="containerDefault">
            <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
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