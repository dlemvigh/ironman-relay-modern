import React from "react";
import { commitMutation, createFragmentContainer, graphql } from "react-relay";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"
import { environment } from "../../relay/environment";
import { addActivityMutation, addActivityUpdater } from "../../relay/addActivityMutation";
import { editActivityMutation } from "../../relay/editActivityMutation";

export const ActivityForm = (props) => (
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
    user: elements.user.value,
    discipline: elements.discipline.value,
    distance: elements.distance.value,
    date: "2018-10-03"
  }

  const isEdit = !!elements.activityID;

  if (isEdit) {
    input.id = elements.activityID.value;
    commitMutation(environment, {
      mutation: editActivityMutation, 
      variables: { input }, 
    });
  } else {
    commitMutation(environment, {
      mutation: addActivityMutation, 
      variables: { input }, 
      updater(store) {
        addActivityUpdater(store);
      }
    });  
  }

};

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