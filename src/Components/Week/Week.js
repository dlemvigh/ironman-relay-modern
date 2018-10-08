import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import Activities from "../Activities/Activities";

const Week = ({ week }) => (
    <>
        <div>
          <h2>
                Week - {week.week}
          </h2>
          <Activities activities={week.activities} />
        </div>
    </>
);

const WeekContainer = createFragmentContainer(
  Week,
  graphql`
        fragment Week_week on Week {
            week
            activities {
                ...Activities_activities
            }
        }
    `
)

export default WeekContainer;