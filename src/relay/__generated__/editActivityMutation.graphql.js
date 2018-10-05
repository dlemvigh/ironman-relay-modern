/**
 * @flow
 * @relayHash a45c441eca7155f35dc68ce20ce31a63
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
export type editActivityMutationVariables = {|
  input: UpdateActivityInput
|};
export type editActivityMutationResponse = {|
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
export type editActivityMutation = {|
  variables: editActivityMutationVariables,
  response: editActivityMutationResponse,
|};
*/


/*
mutation editActivityMutation(
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
  "name": "editActivityMutation",
  "id": null,
  "text": "mutation editActivityMutation(\n  $input: UpdateActivityInput!\n) {\n  updateActivity(input: $input) {\n    activity {\n      id\n      userDisplayName\n      disciplineDisplayName\n      distance\n      unit\n      score\n      week\n      date\n    }\n    user {\n      id\n    }\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editActivityMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "editActivityMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5dca3b53268507a3e86af64c0a5de63b';
module.exports = node;
