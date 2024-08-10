import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    },
]);

export default router;