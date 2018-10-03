/**
 * @flow
 * @relayHash 7679650c0f02834249e2858f962ce27c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeaderMenuAthletes_users$ref = any;
export type HeaderQueryVariables = {||};
export type HeaderQueryResponse = {|
  +viewer: ?{|
    +users: ?$ReadOnlyArray<?{|
      +$fragmentRefs: HeaderMenuAthletes_users$ref
    |}>
  |}
|};
export type HeaderQuery = {|
  variables: HeaderQueryVariables,
  response: HeaderQueryResponse,
|};
*/


/*
query HeaderQuery {
  viewer {
    users {
      ...HeaderMenuAthletes_users
      id
    }
  }
}

fragment HeaderMenuAthletes_users on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeaderQuery",
  "id": null,
  "text": "query HeaderQuery {\n  viewer {\n    users {\n      ...HeaderMenuAthletes_users\n      id\n    }\n  }\n}\n\nfragment HeaderMenuAthletes_users on User {\n  id\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeaderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "HeaderMenuAthletes_users",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeaderQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '474bb8f0c095ed50b552de46f897b958';
module.exports = node;
