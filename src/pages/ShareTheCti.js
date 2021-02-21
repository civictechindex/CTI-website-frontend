
import React from "react";
import {
  Footer,
  Header,
  NavBreadcrumbs,
  TitleSection,
} from "../components";
import { Container } from "@material-ui/core";



export default function ShareTheCti() {
  const crumbs = [
    { name: "Home", href: "/home" },
    { name: "Radical Collaboration", href: "/radicalcollaboration" },
    { name: "FAQ", href: "/radicalcollaboration/faq" },
  ];

  return (
    <>
      <Header />
      <Container>
        <NavBreadcrumbs crumbs={crumbs} color="#FEFEFE" />
        <TitleSection>Share the CTI</TitleSection>

      </Container>
      <Footer />
    </>

  );
}
