import React from "react";
import { graphql } from "react-relay";
import ActivityForm from "../Activities/ActivityForm"; 
import Activities from "../Activities/Activities";
import Renderer from "../Renderer";
import Season from "../Season/Season";
import Week from "../Week/Week";

const IndexPage = () => (
  <>
    <Renderer
      query={IndexPageQuery}
      Component={props => <>      
        <ActivityForm 
          // activity={props.viewer.activities.length > 0 ? props.viewer.activities[0] : null}
          activity={null}
          disciplines={props.viewer.disciplines}
          users={props.viewer.users}
        />
        <Week week={props.viewer.week40} />
        <Week week={props.viewer.week41} />
        <Season season={props.viewer.week40.season} />
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
      week40: week(week: 201840) {
        ...Week_week
        season {
          ...Season_season
        }
      }
      week41: week(week: 201841) {
        ...Week_week
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