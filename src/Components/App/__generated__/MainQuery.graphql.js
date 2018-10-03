/**
 * @flow
 * @relayHash ac1c83d28e996fc2bd78368dabcddd5b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainQueryVariables = {||};
export type MainQueryResponse = {|
  +viewer: ?{|
    +hello: ?string
  |}
|};
export type MainQuery = {|
  variables: MainQueryVariables,
  response: MainQueryResponse,
|};
*/


/*
query MainQuery {
  viewer {
    hello
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "hello",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MainQuery",
  "id": null,
  "text": "query MainQuery {\n  viewer {\n    hello\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MainQuery",
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
        "selections": v0
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainQuery",
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
        "selections": v0
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
})();
// prettier-ignore
(node/*: any*/).hash = 'fb8092bc8d189f6e86ae506db913f6de';
module.exports = node;
