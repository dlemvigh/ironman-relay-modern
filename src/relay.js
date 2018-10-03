import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { commitMutation } from "react-relay";

function fetchQuery(operation, variables) {
  return fetch(
    '/graphql',
    {
      method: 'POST',
      headers: {
        // Add authentication and other headers here
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    },
  ).then(response => response.json());
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export const commit = ({ mutation, input, ...args }) => commitMutation(environment, { mutation, variables: { input }, ...args });