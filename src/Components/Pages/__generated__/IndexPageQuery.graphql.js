/**
 * @flow
 * @relayHash 4516a6ede392d875ae108a59339c2c77
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Activities_activities$ref = any;
type ActivityForm_disciplines$ref = any;
type ActivityForm_users$ref = any;
type ActivityForm_viewer$ref = any;
export type IndexPageQueryVariables = {||};
export type IndexPageQueryResponse = {|
  +viewer: ?{|
    +users: ?$ReadOnlyArray<?{|
      +name: ?string,
      +displayName: ?string,
      +activities: ?$ReadOnlyArray<?{|
        +$fragmentRefs: Activities_activities$ref
      |}>,
      +$fragmentRefs: ActivityForm_users$ref,
    |}>,
    +activities: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Activities_activities$ref
    |}>,
    +disciplines: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ActivityForm_disciplines$ref
    |}>,
    +$fragmentRefs: ActivityForm_viewer$ref,
  |}
|};
export type IndexPageQuery = {|
  variables: IndexPageQueryVariables,
  response: IndexPageQueryResponse,
|};
*/


/*
query IndexPageQuery {
  viewer {
    ...ActivityForm_viewer
    users {
      name
      displayName
      activities {
        ...Activities_activities
        id
      }
      id
      ...ActivityForm_users
    }
    activities {
      ...Activities_activities
      id
    }
    disciplines {
      ...ActivityForm_disciplines
      id
    }
    id
  }
}

fragment ActivityForm_viewer on Viewer {
  id
}

fragment Activities_activities on Activity {
  id
  userDisplayName
  disciplineDisplayName
  distance
  unit
  score
  date
}

fragment ActivityForm_users on User {
  name
  displayName
}

fragment ActivityForm_disciplines on Discipline {
  name
  displayName
  unit
  score
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
},
v2 = {
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "score",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "activities",
  "storageKey": null,
  "args": null,
  "concreteType": "Activity",
  "plural": true,
  "selections": [
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
    v4,
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "IndexPageQuery",
  "id": null,
  "text": "query IndexPageQuery {\n  viewer {\n    ...ActivityForm_viewer\n    users {\n      name\n      displayName\n      activities {\n        ...Activities_activities\n        id\n      }\n      id\n      ...ActivityForm_users\n    }\n    activities {\n      ...Activities_activities\n      id\n    }\n    disciplines {\n      ...ActivityForm_disciplines\n      id\n    }\n    id\n  }\n}\n\nfragment ActivityForm_viewer on Viewer {\n  id\n}\n\nfragment Activities_activities on Activity {\n  id\n  userDisplayName\n  disciplineDisplayName\n  distance\n  unit\n  score\n  date\n}\n\nfragment ActivityForm_users on User {\n  name\n  displayName\n}\n\nfragment ActivityForm_disciplines on Discipline {\n  name\n  displayName\n  unit\n  score\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "IndexPageQuery",
    "type": "Query",
    "metadata": null,
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
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ActivityForm_viewer",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              v0,
              v1,
              v2,
              {
                "kind": "FragmentSpread",
                "name": "ActivityForm_users",
                "args": null
              }
            ]
          },
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "disciplines",
            "storageKey": null,
            "args": null,
            "concreteType": "Discipline",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ActivityForm_disciplines",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "IndexPageQuery",
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
        "selections": [
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              v0,
              v1,
              v6,
              v3
            ]
          },
          v6,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "disciplines",
            "storageKey": null,
            "args": null,
            "concreteType": "Discipline",
            "plural": true,
            "selections": [
              v0,
              v1,
              v4,
              v5,
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '515fba7854b3e7eb6ad82241ce741917';
module.exports = node;
