/**
 * @flow
 * @relayHash 997c9e6ad05f8579c4e3878919865952
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
export type ActivityForm_Add_MutationVariables = {|
  input: AddActivityInput
|};
export type ActivityForm_Add_MutationResponse = {|
  +addActivity: ?{|
    +activity: ?{|
      +id: string,
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
export type ActivityForm_Add_Mutation = {|
  variables: ActivityForm_Add_MutationVariables,
  response: ActivityForm_Add_MutationResponse,
|};
*/


/*
mutation ActivityForm_Add_Mutation(
  $input: AddActivityInput!
) {
  addActivity(input: $input) {
    activity {
      id
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
v3 = [
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": v2
      },
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
  "name": "ActivityForm_Add_Mutation",
  "id": null,
  "text": "mutation ActivityForm_Add_Mutation(\n  $input: AddActivityInput!\n) {\n  addActivity(input: $input) {\n    activity {\n      id\n      userDisplayName\n      disciplineDisplayName\n      distance\n      unit\n      score\n      week\n      date\n    }\n    user {\n      id\n    }\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActivityForm_Add_Mutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "ActivityForm_Add_Mutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b8e0074335b41a4f944e1ed0c077940';
module.exports = node;
