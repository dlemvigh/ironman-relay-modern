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
        <ActivityForm {...props.viewer} />
        {props.viewer.users.filter(user => user.activities.length > 0).map(user => (
          <React.Fragment key={user.name}>
            <h2>{user.displayName}</h2>
            <Activities activities={user.activities} />
          </React.Fragment>
        ))}
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