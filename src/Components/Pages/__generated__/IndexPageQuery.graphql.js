/**
 * @flow
 * @relayHash 225b3bd28fe642c46a2e996e56394f28
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Activities_activities$ref = any;
type ActivityForm_disciplines$ref = any;
type ActivityForm_users$ref = any;
type Season_season$ref = any;
type Week_week$ref = any;
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
    +week40: ?{|
      +season: ?{|
        +$fragmentRefs: Season_season$ref
      |},
      +$fragmentRefs: Week_week$ref,
    |},
    +week41: ?{|
      +$fragmentRefs: Week_week$ref
    |},
    +disciplines: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ActivityForm_disciplines$ref
    |}>,
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
    week40: week(week: 201840) {
      ...Week_week
      season {
        ...Season_season
        id
      }
    }
    week41: week(week: 201841) {
      ...Week_week
    }
    disciplines {
      ...ActivityForm_disciplines
      id
    }
    id
  }
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

fragment Week_week on Week {
  week
  activities {
    ...Activities_activities
    id
  }
}

fragment Season_season on Season {
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
v2 = [
  {
    "kind": "Literal",
    "name": "week",
    "value": 201840,
    "type": "Int!"
  }
],
v3 = {
  "kind": "FragmentSpread",
  "name": "Week_week",
  "args": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "week",
    "value": 201841,
    "type": "Int!"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unit",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "score",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "activities",
  "storageKey": null,
  "args": null,
  "concreteType": "Activity",
  "plural": true,
  "selections": [
    v5,
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
    v6,
    v7,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "week",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "IndexPageQuery",
  "id": null,
  "text": "query IndexPageQuery {\n  viewer {\n    users {\n      name\n      displayName\n      activities {\n        ...Activities_activities\n        id\n      }\n      id\n      ...ActivityForm_users\n    }\n    week40: week(week: 201840) {\n      ...Week_week\n      season {\n        ...Season_season\n        id\n      }\n    }\n    week41: week(week: 201841) {\n      ...Week_week\n    }\n    disciplines {\n      ...ActivityForm_disciplines\n      id\n    }\n    id\n  }\n}\n\nfragment Activities_activities on Activity {\n  id\n  userDisplayName\n  disciplineDisplayName\n  distance\n  unit\n  score\n  date\n}\n\nfragment ActivityForm_users on User {\n  name\n  displayName\n}\n\nfragment Week_week on Week {\n  week\n  activities {\n    ...Activities_activities\n    id\n  }\n}\n\nfragment Season_season on Season {\n  displayName\n}\n\nfragment ActivityForm_disciplines on Discipline {\n  name\n  displayName\n  unit\n  score\n}\n",
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
              },
              {
                "kind": "FragmentSpread",
                "name": "ActivityForm_users",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "week40",
            "name": "week",
            "storageKey": "week(week:201840)",
            "args": v2,
            "concreteType": "Week",
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "season",
                "storageKey": null,
                "args": null,
                "concreteType": "Season",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "Season_season",
                    "args": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "week41",
            "name": "week",
            "storageKey": "week(week:201841)",
            "args": v4,
            "concreteType": "Week",
            "plural": false,
            "selections": [
              v3
            ]
          },
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
              v8,
              v5
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "week40",
            "name": "week",
            "storageKey": "week(week:201840)",
            "args": v2,
            "concreteType": "Week",
            "plural": false,
            "selections": [
              v9,
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "season",
                "storageKey": null,
                "args": null,
                "concreteType": "Season",
                "plural": false,
                "selections": [
                  v1,
                  v5
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "week41",
            "name": "week",
            "storageKey": "week(week:201841)",
            "args": v4,
            "concreteType": "Week",
            "plural": false,
            "selections": [
              v9,
              v8
            ]
          },
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
              v6,
              v7,
              v5
            ]
          },
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec6cdb6883f9e31689d54a45d65b2fa8';
module.exports = node;
