import React from "react";
import Header from "./sections/Header";
import PlayingNow from "./UI/PlayingNow";
import MapSection from "./sections/MapSection";
import Section from "./sections/Section";
import ArtistsSection from "./sections/ArtistsSection";

function FestLandPage(props) {
  function goToProgramPage() {
    props.setShowProgramPage(true);
    props.setShowFestLandPage(false);
    window.location = "#";
  }

  return (
    <main>
      <Header className="header" />
      <PlayingNow {...props} />
      <MapSection
        content="Find your Way"
        className="mapSection"
        btnClassName="primBtn"
        {...props}
      />
      <Section
        content="Check When Your Favorite Artists Are Playing"
        titleClassName="gradientTxt"
        action={goToProgramPage}
        btnContent="Go To Program Page »"
        btnClassName="primBtn"
      />
      {/* <Section className="section" content="Getting Hungry?" titleClassName="title" btnContent="Top Up Your Card" btnClassName="secBtn" action={goToFCardPage} /> */}
      <ArtistsSection
        className="artistSection"
        content="Meet the Artists"
        titleClassName="title"
        {...props}
      />
    </main>
  );
}

export default FestLandPage;
