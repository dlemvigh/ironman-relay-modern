import { Environment, Network, RecordSource, Store } from 'relay-runtime';

function fetchQuery(operation, variables) {
  return fetch(
    'http://localhost:3000/graphql',
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

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});