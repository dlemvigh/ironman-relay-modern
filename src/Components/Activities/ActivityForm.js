import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { commit } from "../../relay";

export const ActivityForm = (props) => (
  // console.log(props),
  <form onSubmit={handleSubmit}>
    <select name="user">
      {props.users.map(user =>
        <option key={user.name} value={user.name}>{user.displayName}</option>
      )}
    </select>
    <select name="discipline">
      {props.disciplines.map(disc =>
        <option key={disc.name} value={disc.name}>{disc.displayName}</option>
      )}
    </select>
    <input 
      type="number"
      name="distance"
    />
    <button type="submit">Tilføj</button>
  </form>
)

const handleSubmit = (event) => {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const input = {
    user: elements.user.value,
    discipline: elements.discipline.value,
    distance: elements.distance.value,
    date: "2018-10-03"
  }
  console.log(input);
  commit({ 
    mutation, 
    input, 
    onCompleted(...args) { 
      console.log("complete", ...args) 
    },
    updater(store) {
      const payload = store.getRootField("addActivity");
      const newActivity = payload.getLinkedRecord("activity");
      const id = newActivity.getLinkedRecord("user").getValue("id");
      const user = store.get(id);
      const oldActs = user.getLinkedRecords("activities") || [];
      const newActs = [...oldActs, newActivity];
      user.setLinkedRecords(newActs, "activities");
      debugger;
    }
  });
  // event.currentTarget.reset();
};

const mutation = graphql`
  mutation ActivityFormMutation($input: AddActivityInput!) {
    addActivity(input: $input) {
      activity {
        id
        user {
          id
        }
        unit
        score
      }
    }
  }
`;

export const ActivityFormContainer = createFragmentContainer(
  ActivityForm,
  graphql`
    fragment ActivityForm_disciplines on Discipline @relay(plural: true) {
      name
      displayName
      unit
      score
    }
    fragment ActivityForm_users on User @relay(plural: true) {
      name
      displayName
    }
  `
)

export default ActivityFormContainer;