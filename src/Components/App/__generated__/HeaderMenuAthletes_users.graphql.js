/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HeaderMenuAthletes_users$ref: FragmentReference;
export type HeaderMenuAthletes_users = $ReadOnlyArray<{|
  +id: string,
  +name: ?string,
  +$refType: HeaderMenuAthletes_users$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HeaderMenuAthletes_users",
  "type": "User",
  "metadata": {
    "plural": true
  },
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
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '00df1c5e40ede16e2de2c1a1d62f8050';
module.exports = node;
