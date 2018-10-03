import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

export const Activities = (props) => {
  const { activities } = props;
  if (activities && activities.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Score</th>
            <th>Discipline</th>
            <th>Distance</th>
            <th>Unit</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.activities.map(act =>
            <tr key={act.id}>
              <td>{act.userDisplayName}</td>
              <td>{act.score}</td>
              <td>{act.disciplineDisplayName}</td>
              <td>{act.distance}</td>
              <td>{act.unit}</td>
              <td>{act.date}</td>
            </tr>
          )}
        </tbody>
      </table>  
    )
  }
  return null;
}

const ActivitiesContainer = createFragmentContainer(
  Activities,
  graphql`
    fragment Activities_activities on Activity @relay(plural: true) {
      id
      userDisplayName
      disciplineDisplayName
      distance
      unit
      score
      date
    }
  `
)

export default ActivitiesContainer;