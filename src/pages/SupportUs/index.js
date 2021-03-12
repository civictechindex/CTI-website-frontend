import React from 'react'
import { Container } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import {
    GetStartedCard,
    NavBreadcrumbs,
    TitleSection,
    PhotoCardMobile,
    PhotoCardDsktp
} from '../../components';

const SupportUs = () => {
    const crumbs = [
        { name: "Home", href: "/home" },
        { name: "Support Us", href: "/support" },
    ];

    const Images = [
        {
            src: "/images/photo-of-people-standing-near-window-3184427.png", alt: "team high fiving",
            heading: 'Donate',
            subHeading: 'Every gift helps us continue our work.',
            textBody: 'Your tax-deductible gift today will help make more open-source solutions easily available for the communities who need it the most.',
            footerText: 'Thank You.',
            buttonText: 'Make a Donation'
        },
        {
            src: "/images/group-smiling-working.png", alt: "group working",
            heading: 'Share the CTI',
            subHeading: 'Love the Index? Be an evangelist!',
            textBody: ' Help others and their communities discover, share, and benefit from contributed projects on the Index.',
            buttonText: 'Share the CTI'
        },
        {
            src: "/images/bulletin-board-postits.png", alt: "bulletin board",
            heading: 'Volunteer with Us',
            subHeading: 'Help us improve the Civic Tech Index',
            textBody: 'Please complete this application if you would like us to reach out to you directly or find us on our project team page.',
            buttonText: 'Become a Volunteer'
        },
        {
            src: "/images/man-and-woman-working.png", alt: "girl and guy coding",
            heading: 'Need Help?',
            subHeading: "Can't find the answer you're looking for?",
            textBody: "We've shared some of our most frequently asked questions to help you out! View our FAQ to find answers or contact us.",
            buttonText: 'View the FAQ'
        },
    ];
    return (
        <Container className="containerDefault">
            <NavBreadcrumbs crumbs={crumbs} style={{ fontColor: '#FEFEFE' }} />
            <TitleSection>
                Your Help Goes a Long Way
            </TitleSection>
            <Hidden mdDown>
                <PhotoCardDsktp items={Images} />
            </Hidden>
            <Hidden mdUp>
                <PhotoCardMobile items={Images} />
            </Hidden>
            <GetStartedCard
                headerTitle="Ready to get started?"
                buttonText="Tag your Project"
                buttonHref="/tag-generator"
            />
        </Container>
    );

}

export default withWidth()(SupportUs);