import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"
import { commit } from "../../relay";

export const ActivityForm = (props) => (
  // console.log(props),
  <Form onSubmit={handleSubmit}>
    {props.activity && <input type="hidden" name="id" value={props.activity.id} />}
    <Row form="true">
      <Col md={3} sm={6}>
        <FormGroup>
          <Label>User</Label>
          <Input type="select" name="user" defaultValue={props.activity && props.activity.user.name}>
            {props.users.map(user =>
              <option key={user.name} value={user.name}>{user.displayName}</option>
            )}
          </Input>
        </FormGroup>
      </Col>
      <Col md={3} sm={6}>
        <FormGroup>
          <Label>Discipline</Label>
          <Input type="select" name="discipline" defaultValue={props.activity && props.activity.discipline.name}>
            {props.disciplines.map(disc =>
              <option key={disc.name} value={disc.name}>{disc.displayName}</option>
            )}
          </Input>
        </FormGroup>
      </Col>
      <Col md={3} sm={6}>
        <FormGroup>
          <Label>Distance</Label>
          <Input 
            type="number"
            name="distance"
            defaultValue={props.activity ? props.activity.distance : 1}
          />
        </FormGroup>
      </Col>
      <Col md={3} sm={6}>
        <Label>&nbsp;</Label><br />
        <Button name="add" value="add" type="submit" color="primary">Tilføj</Button>
      </Col>
    </Row>
    {
      props.activity && 
      <Row form="true">
        <Col md={3} sm={6}>
          <FormGroup>
            <Label>ID</Label>
            <Input 
              name="activityID"
              defaultValue={props.activity && props.activity.id}
            />
          </FormGroup>
        </Col>
        <Col md={3} sm={6}>
          <Label>&nbsp;</Label><br />
          <Button name="edit" value="edit" type="submit" color="primary">Edit</Button>
        </Col>
      </Row>
    }
  </Form>
)

const handleSubmit = (event) => {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const input = {
    id: elements.activityID.value,
    user: elements.user.value,
    discipline: elements.discipline.value,
    distance: elements.distance.value,
    date: "2018-10-03"
  }

  // commit({ 
  //   mutation: addActivityMutation, 
  //   input, 
  //   onCompleted(...args) { 
  //     console.log("complete", ...args) 
  //   },
  //   updater(store) {
  //     const payload = store.getRootField("addActivity");

  //     const activity = payload.getLinkedRecord("activity");
  //     const user = payload.getLinkedRecord("user");
  //     const viewer = payload.getLinkedRecord("viewer");

  //     append(user, "activities", activity);
  //     append(viewer, "activities", activity)
  //   }
  // });
  commit({ 
    mutation: editActivityMutation, 
    input, 
    onCompleted(...args) { 
      console.log("complete", ...args) 
    },
    updater(store) {
      // const payload = store.getRootField("updateActivity");


      // const activity = payload.getLinkedRecord("activity");
      // const user = payload.getLinkedRecord("user");
      // const viewer = payload.getLinkedRecord("viewer");

      // append(user, "activities", activity);
      // append(viewer, "activities", activity)
      // debugger;
    }
  });
  event.currentTarget.reset();
};

const append = (root, name, item) => {
  const list = root.getLinkedRecords(name) || [];
  root.setLinkedRecords([...list, item], name);
}

const addActivityMutation = graphql`
  mutation ActivityForm_Add_Mutation($input: AddActivityInput!) {
    addActivity(input: $input) {
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

const editActivityMutation = graphql`
  mutation ActivityForm_Edit_Mutation($input: UpdateActivityInput!) {
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

export const ActivityFormContainer = createFragmentContainer(
  ActivityForm,
  graphql`
    fragment ActivityForm_activity on Activity {
      id
      user {
        name
      }
      discipline {
        name
      }
      distance
    }
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