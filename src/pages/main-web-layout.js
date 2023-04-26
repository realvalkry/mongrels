import { Outlet } from "react-router-dom";
import Layout from "./layout";

function MainWebLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default MainWebLayout;
