/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ActivityForm_activity$ref: FragmentReference;
export type ActivityForm_activity = {|
  +id: string,
  +user: ?{|
    +name: ?string
  |},
  +discipline: ?{|
    +name: ?string
  |},
  +distance: ?number,
  +$refType: ActivityForm_activity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "ActivityForm_activity",
  "type": "Activity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "discipline",
      "storageKey": null,
      "args": null,
      "concreteType": "Discipline",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "distance",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '058185c4ae8ab66a9e952614a962a95b';
module.exports = node;
