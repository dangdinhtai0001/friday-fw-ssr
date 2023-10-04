import { lazy, Suspense } from 'react';
import { createBrowserRouter, } from "react-router-dom";

import RootLayout from '@package/gabriel/Layout';
import ErrorPage from "@package/gabriel/Error";

const Page = lazy(() => import("@package/gabriel/admin/lecturer/page"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "lecturer",
                element: (
                    <Suspense fallback={<>...</>}>
                        <Page />
                    </Suspense>
                )
            },
        ],
    },
]);