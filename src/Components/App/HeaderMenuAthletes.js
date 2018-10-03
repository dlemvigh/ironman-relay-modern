import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { DropdownItem } from 'reactstrap';
import { Link } from 'react-router'

const HeaderMenuAthletes = ({ users }) => (
  <>
    {users.map(user =>
      <DropdownItem key={user.id} tag={Link} to={user.name} activeClassName="active">
        {user.name}
      </DropdownItem>
    )}
  </>
);

export const container = createFragmentContainer(
  HeaderMenuAthletes, 
  graphql`
    fragment HeaderMenuAthletes_users on User @relay(plural: true) {
      id
      name
    }
  `
);

export default container;
