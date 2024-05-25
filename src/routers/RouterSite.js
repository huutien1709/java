import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";

const RouterSite =[
    {
        index:true,
        element: <Home />,
    },
    {
        path:"home",
        element:  <Home />
    },
    {
        path:"contact",
        element:  <Contact />
    },
];
export default RouterSite;