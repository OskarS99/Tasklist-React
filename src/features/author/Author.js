import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { GlobalStyle } from "../../globalStyle";

export default () => (
  <Container>
    <GlobalStyle />
    <Header title="O autorze" />
    <Section
      title="Oskar Siry"
      body={
        <>
          <p>
            <strong>Wieczny marzyciel :P</strong> <em> Na ten moment </em>
             posiadam średnie wykształcenie. Na co dzień analizuje wykresy
            indeksów giełdowych i jest to obecnie moje główne zajęcie, po
            ówczesnej pracy w korpo. W przyszłości chciałbym stać się również{" "}
            <span class="slowo">bardzo dobrym</span> programistom.😀
          </p>
        </>
      }
    />
  </Container>
);
