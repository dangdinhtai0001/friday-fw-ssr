import { lazy } from 'react';
import { IRouteConfig } from "./_types.d";
import { RouteObject } from 'react-router-dom';

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

const Component = lazy(() => import('@package/gabriel/admin/design-system/color/Page'));

export const routeConfig: RouteObject[] = [
    {
        path: 'design-system', children: [
            {
                path: 'color',
                element: <Component />
            },

        ]
    }
];

export const getRouteConfig = (config: IRouteConfig[]): IRouteConfig[] => {
    return [
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: 'admin',
                    element: <AdminLayout />,
                    children: config
                }
            ],
        }
    ]
};