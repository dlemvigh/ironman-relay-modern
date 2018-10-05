import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Table } from "reactstrap";

export const Activities = (props) => {
  const { activities } = props;
  if (activities && activities.length > 0) {
    return (
      <Table striped size="sm">
        <thead>
          <tr>
            <th>User</th>
            <th>Discipline</th>
            <th>Distance</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.activities.map(act =>
            <tr key={act.id}>
              <td>{act.userDisplayName}</td>
              <td>{act.disciplineDisplayName}</td>
              <td>{act.distance} {act.unit}</td>
              <td>{act.score}</td>
              <td>{act.date}</td>
            </tr>
          )}
        </tbody>
      </Table>  
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