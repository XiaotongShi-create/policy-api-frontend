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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import DeleteDataPage from "./components/DeleteDataPage";

function Alerts() {
  return (
    <BaseLayout
      title="Delete Policies"
      breadcrumb={[
        { label: "API Services", route: "pages/Presentation" },
        { label: "Delete Policies" },
      ]}
    >
      <DeleteDataPage />
    </BaseLayout>
  );
}

export default Alerts;
