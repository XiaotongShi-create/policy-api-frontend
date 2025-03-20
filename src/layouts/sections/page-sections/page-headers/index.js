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
import GetDataPage from "./component/GetDataPage";

function PageHeaders() {
  return (
    <BaseLayout
      title="Get Policies"
      breadcrumb={[
        { label: "API Services", route: "pages/Presentation" },
        { label: "Get Policies" },
      ]}
    >
      <GetDataPage />
    </BaseLayout>
  );
}

export default PageHeaders;
