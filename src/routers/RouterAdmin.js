import Category from "../pages/backend/Category";
import Product from "../pages/backend/Product";
import Topic from "../pages/backend/Topic";
import User from "../pages/backend/User";

const RouterAdmin = [
    {
        path: "product",
        element: <Product />,
    },
    {
        path: "category",
        element: <Category />,
    },
    {
        path: "topic",
        element: <Topic />,
    },
    {
        path: "user",
        element: <User />,
    },
];
export default RouterAdmin;