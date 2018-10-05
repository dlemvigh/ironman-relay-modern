import React from "react";
import { QueryRenderer } from "react-relay";

import { environment } from "../relay/environment";

export default ({ 
  Component, 
  loading,
  query, 
  ...props 
}) => (
  <QueryRenderer
    environment={environment}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return loading || null;
      }
      return <Component {...props} />
    }}
  />
)
