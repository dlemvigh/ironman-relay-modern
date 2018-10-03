/**
 * @flow
 * @relayHash c848dd537d6f936f22e58f3874c89a3f
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
      +unit: ?string,
      +score: ?number,
    |}
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
      unit
      score
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
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1
            ]
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ActivityFormMutation",
  "id": null,
  "text": "mutation ActivityFormMutation(\n  $input: AddActivityInput!\n) {\n  addActivity(input: $input) {\n    activity {\n      id\n      user {\n        id\n      }\n      unit\n      score\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActivityFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "ActivityFormMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a72ef2a753527bc2647bfb671d2d5e5d';
module.exports = node;
