/**
 * @flow
 * @relayHash 24e054b506b23f6001618a764ef5818a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddActivityInput = {
  user: string,
  discipline: string,
  distance: number,
  date: any,
  clientMutationId?: ?string,
};
export type ActivityFormMutationVariables = {|
  input: AddActivityInput
|};
export type ActivityFormMutationResponse = {|
  +addActivity: ?{|
    +activity: ?{|
      +id: string,
      +user: ?{|
        +id: string
      |},
      +userDisplayName: ?string,
      +disciplineDisplayName: ?string,
      +distance: ?number,
      +unit: ?string,
      +score: ?number,
      +week: ?number,
      +date: ?any,
    |},
    +user: ?{|
      +id: string
    |},
    +viewer: ?{|
      +id: string
    |},
  |}
|};
export type ActivityFormMutation = {|
  variables: ActivityFormMutationVariables,
  response: ActivityFormMutationResponse,
|};
*/


/*
mutation ActivityFormMutation(
  $input: AddActivityInput!
) {
  addActivity(input: $input) {
    activity {
      id
      user {
        id
      }
      userDisplayName
      disciplineDisplayName
      distance
      unit
      score
      week
      date
    }
    user {
      id
    }
    viewer {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddActivityInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  v1
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v2
},
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addActivity",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddActivityInput!"
      }
    ],
    "concreteType": "AddActivityPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "activity",
        "storageKey": null,
        "args": null,
        "concreteType": "Activity",
        "plural": false,
        "selections": [
          v1,
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "userDisplayName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "disciplineDisplayName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "distance",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "unit",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "score",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "week",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          }
        ]
      },
      v3,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": v2
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ActivityFormMutation",
  "id": null,
  "text": "mutation ActivityFormMutation(\n  $input: AddActivityInput!\n) {\n  addActivity(input: $input) {\n    activity {\n      id\n      user {\n        id\n      }\n      userDisplayName\n      disciplineDisplayName\n      distance\n      unit\n      score\n      week\n      date\n    }\n    user {\n      id\n    }\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActivityFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v4
  },
  "operation": {
    "kind": "Operation",
    "name": "ActivityFormMutation",
    "argumentDefinitions": v0,
    "selections": v4
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f35e3593270283fe2b8afa5caeca480';
module.exports = node;
