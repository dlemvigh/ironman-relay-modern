import React from "react";
import { graphql } from "react-relay";
import ActivityForm from "../Activities/ActivityForm"; 
import Activities from "../Activities/Activities";
import Renderer from "../Renderer";

const IndexPage = () => (
  <>
    <Renderer
      query={IndexPageQuery}
      Component={props => <>      
        <ActivityForm 
          activity={props.viewer.activities.length > 0 ? props.viewer.activities[0] : null}
          disciplines={props.viewer.disciplines}
          users={props.viewer.users}
        />
        <hr />
        {props.viewer.users.filter(user => user.activities.length > 0).map(user => (
          <React.Fragment key={user.name}>
            <h2>{user.displayName}</h2>
            <Activities activities={user.activities} />
          </React.Fragment>
        ))}
        <hr/>
        <h2>All activities</h2>
        <Activities activities={props.viewer.activities} />
      </>}
    />
  </>
)

const IndexPageQuery = graphql`
  query IndexPageQuery {
    viewer {
      users {
        name
        displayName
        activities {
          ...Activities_activities
        }  
      }
      activities {
        id
        ...Activities_activities
        ...ActivityForm_activity
      }
      disciplines {
        ...ActivityForm_disciplines
      }
      users {
        ...ActivityForm_users
      }
    }
  }
`

export default IndexPage;