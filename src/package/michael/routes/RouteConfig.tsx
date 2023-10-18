import { lazy, Suspense } from 'react';
import { IRouteConfig } from "./_types.d";
import { RouteObject } from 'react-router-dom';
import { Snowflake } from "@theinternetfolks/snowflake";

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import DesignSystem_Color from '@package/gabriel/admin/design-system/color/Page';
import DesignSystem_TextStyles from '@package/gabriel/admin/design-system/text-styles/Page';
import DesignSystem_Measurement from '@package/gabriel/admin/design-system/measurement/Page';

export const routeConfig: RouteObject[] = [
    {
        id: Snowflake.generate(), path: 'design-system', children: [
            {
                id: Snowflake.generate(),
                path: 'color',
                element: <DesignSystem_Color />
            },
            {
                id: Snowflake.generate(),
                path: 'text-styles',
                element: <DesignSystem_TextStyles />
            },
            {
                id: Snowflake.generate(),
                path: 'measurement',
                element: <DesignSystem_Measurement />
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