/**
 * @flow
 * @relayHash 324fa6e6765dc67965543abeaa38195c
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
    id
  }
}

fragment HeaderMenuAthletes_users on User {
  id
  name
  displayName
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeaderQuery",
  "id": null,
  "text": "query HeaderQuery {\n  viewer {\n    users {\n      ...HeaderMenuAthletes_users\n      id\n    }\n    id\n  }\n}\n\nfragment HeaderMenuAthletes_users on User {\n  id\n  name\n  displayName\n}\n",
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
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "displayName",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '474bb8f0c095ed50b552de46f897b958';
module.exports = node;
