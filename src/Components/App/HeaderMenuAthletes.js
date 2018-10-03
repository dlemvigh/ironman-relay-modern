import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { DropdownItem } from 'reactstrap';
import { Link } from 'react-router'

const HeaderMenuAthletes = ({ users }) => (
  <>
    {users.map(user =>
      <DropdownItem key={user.id} tag={Link} to={user.name} activeClassName="active">
        {user.displayName}
      </DropdownItem>
    )}
  </>
);

export const HeaderMenuAthletesContainer = createFragmentContainer(
  HeaderMenuAthletes, 
  graphql`
    fragment HeaderMenuAthletes_users on User @relay(plural: true) {
      id
      name
      displayName
    }
  `
);

export default HeaderMenuAthletesContainer;
