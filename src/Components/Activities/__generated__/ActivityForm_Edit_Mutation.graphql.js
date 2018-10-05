/**
 * @flow
 * @relayHash 2018498cf1ffe17629e0e289618ce98b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateActivityInput = {
  id: string,
  user: string,
  discipline: string,
  distance: number,
  date: any,
  clientMutationId?: ?string,
};
export type ActivityForm_Edit_MutationVariables = {|
  input: UpdateActivityInput
|};
export type ActivityForm_Edit_MutationResponse = {|
  +updateActivity: ?{|
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
export type ActivityForm_Edit_Mutation = {|
  variables: ActivityForm_Edit_MutationVariables,
  response: ActivityForm_Edit_MutationResponse,
|};
*/


/*
mutation ActivityForm_Edit_Mutation(
  $input: UpdateActivityInput!
) {
  updateActivity(input: $input) {
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
    "type": "UpdateActivityInput!",
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
    "name": "updateActivity",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateActivityInput!"
      }
    ],
    "concreteType": "UpdateActivityPayload",
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
  "name": "ActivityForm_Edit_Mutation",
  "id": null,
  "text": "mutation ActivityForm_Edit_Mutation(\n  $input: UpdateActivityInput!\n) {\n  updateActivity(input: $input) {\n    activity {\n      id\n      userDisplayName\n      disciplineDisplayName\n      distance\n      unit\n      score\n      week\n      date\n    }\n    user {\n      id\n    }\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ActivityForm_Edit_Mutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "ActivityForm_Edit_Mutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5dabf8fa189fd7f74746c132fcb30415';
module.exports = node;
