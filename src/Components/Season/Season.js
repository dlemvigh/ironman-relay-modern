import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Season = ({ season }) => (
    <>
        <h2>
            Season - {season.displayName}
        </h2>
    </>
);

const SeasonContainer = createFragmentContainer(
  Season,
  graphql`
        fragment Season_season on Season {
            displayName

        }
    `
)

export default SeasonContainer;