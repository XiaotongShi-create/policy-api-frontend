/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import getPoliciesImage from "assets/images/getPolicies.jpg";
import postPoliciesImage from "assets/images/postPolicies.jpg";
import updatePoliciesImage from "assets/images/updatePolicies.jpg";
import deletePoliciesImage from "assets/images/deletePolicies.jpg";

export default [
  {
    title: "Get Policies",
    description: "Get details for policies by entering the policy ID",
    items: [
      {
        image: getPoliciesImage,
        name: "Click here to get policies",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    title: "Add Policies",
    description: "Add details for new policies",
    items: [
      {
        image: postPoliciesImage,
        name: "Click here to add policies",
        route: "/sections/navigation/navbars",
      },
    ],
  },
  {
    title: "Update Policies",
    description: "Update details for existing policies",
    items: [
      {
        image: updatePoliciesImage,
        name: "Click here to update policies",
        route: "/sections/input-areas/forms",
      },
    ],
  },
  {
    title: "Delete Policies",
    description: "Delete policies by entering the policy ID",
    items: [
      {
        image: deletePoliciesImage,
        name: "Click here to delete policies",
        route: "/sections/attention-catchers/alerts",
      },
    ],
  },
];
