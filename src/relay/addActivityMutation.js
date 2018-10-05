import { graphql } from "react-relay";
import { append } from "./updater";

export const addActivityMutation = graphql`
  mutation addActivityMutation($input: AddActivityInput!) {
    addActivity(input: $input) {
      activity {
        id
        user {
          id
        }
        userDisplayName
        discipline {
          id
        }
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

export const addActivityUpdater = (store) => {
  const payload = store.getRootField("addActivity");

  const activity = payload.getLinkedRecord("activity");
  const user = payload.getLinkedRecord("user");
  const viewer = payload.getLinkedRecord("viewer");

  append(user, "activities", activity);
  append(viewer, "activities", activity)
}
