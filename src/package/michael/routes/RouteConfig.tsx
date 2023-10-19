import { IRouteConfig } from "./_types.d";
import { RouteObject } from 'react-router-dom';
import { Snowflake } from "@theinternetfolks/snowflake";

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

export const routeConfig: RouteObject[] = [
    {
        id: Snowflake.generate(), path: 'design-system', children: [
            {
                id: Snowflake.generate(),
                path: 'color',
                lazy: async () => {
                    let Page = await import('@package/gabriel/admin/design-system/color/Page');
                    return { Component: Page.default };
                }
            },
            {
                id: Snowflake.generate(),
                path: 'text-styles',
                lazy: async () => {
                    let Page = await import('@package/gabriel/admin/design-system/text-styles/Page');
                    return { Component: Page.default };
                }
            },
            {
                id: Snowflake.generate(),
                path: 'measurement',
                lazy: async () => {
                    let Page = await import('@package/gabriel/admin/design-system/measurement/Page');
                    return { Component: Page.default };
                }
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