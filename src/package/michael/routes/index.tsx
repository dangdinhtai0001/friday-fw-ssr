import { Suspense } from "react";
import { createBrowserRouter, } from "react-router-dom";

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import LecturerPage from '@package/gabriel/admin/lecturer/Page';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'admin',
                element: <AdminLayout />,
                children: [
                    {
                        path: "lecturer",
                        element: (
                            <Suspense>
                                <LecturerPage />
                            </Suspense>
                        )
                    }
                ]
            },
        ],
    },
]);