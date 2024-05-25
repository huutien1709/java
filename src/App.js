
import LayoutSite from "./layouts/LayoutSite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterApp from "./routers";
import NoPage from "./pages/NoPage";
import { useRoutes } from "react-router-dom";


function App() {
  let element = useRoutes([
    {
      path: "/",
      element:<LayoutSite/>,
      children: RouterApp.RouterSite,
    },
    {
      path: "admin",
      element:<LayoutAdmin/>,
      children: RouterApp.RouterAdmin,
    },
    {
      path:"*",
      element: <NoPage/>
    }
  ]);
  return element;
} 

export default App;
