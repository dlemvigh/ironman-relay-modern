import { graphql } from "react-relay";

export const editActivityMutation = graphql`
  mutation editActivityMutation($input: UpdateActivityInput!) {
    updateActivity(input: $input) {
      activity {
        id
        userDisplayName
        disciplineDisplayName
        distance
        unit
        score
        week
        date
      }
      user {
        id
      }
      viewer {
        id
      }
    }
  }
`;
