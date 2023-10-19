import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "about",
                // Single route in lazy file
                lazy: () => import("@package/gabriel/admin/design-system/color/Page"),
            },
        ]
    }
]);