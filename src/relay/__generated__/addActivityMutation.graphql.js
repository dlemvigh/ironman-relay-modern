/**
 * @flow
 * @relayHash 97e574ced9ba80d65b9fe150f64c9508
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
export type addActivityMutationVariables = {|
  input: AddActivityInput
|};
export type addActivityMutationResponse = {|
  +addActivity: ?{|
    +activity: ?{|
      +id: string,
      +user: ?{|
        +id: string
      |},
      +userDisplayName: ?string,
      +discipline: ?{|
        +id: string
      |},
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
export type addActivityMutation = {|
  variables: addActivityMutationVariables,
  response: addActivityMutationResponse,
|};
*/


/*
mutation addActivityMutation(
  $input: AddActivityInput!
) {
  addActivity(input: $input) {
    activity {
      id
      user {
        id
      }
      userDisplayName
      discipline {
        id
      }
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
            "kind": "LinkedField",
            "alias": null,
            "name": "discipline",
            "storageKey": null,
            "args": null,
            "concreteType": "Discipline",
            "plural": false,
            "selections": v2
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
  "name": "addActivityMutation",
  "id": null,
  "text": "mutation addActivityMutation(\n  $input: AddActivityInput!\n) {\n  addActivity(input: $input) {\n    activity {\n      id\n      user {\n        id\n      }\n      userDisplayName\n      discipline {\n        id\n      }\n      disciplineDisplayName\n      distance\n      unit\n      score\n      week\n      date\n    }\n    user {\n      id\n    }\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addActivityMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v4
  },
  "operation": {
    "kind": "Operation",
    "name": "addActivityMutation",
    "argumentDefinitions": v0,
    "selections": v4
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f5798969ca612ed0d9e6083c4dbb6f2';
module.exports = node;
