/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Activities_activities$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Week_week$ref: FragmentReference;
export type Week_week = {|
  +week: ?number,
  +activities: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Activities_activities$ref
  |}>,
  +$refType: Week_week$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Week_week",
  "type": "Week",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "week",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "activities",
      "storageKey": null,
      "args": null,
      "concreteType": "Activity",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Activities_activities",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b603ecb81b1e65a139f38bf69b8beff5';
module.exports = node;
