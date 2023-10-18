import { lazy } from 'react';
import { IRouteConfig } from "./_types.d";
import { RouteObject } from 'react-router-dom';
import { Snowflake } from "@theinternetfolks/snowflake";

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import { Figma, ColorPalette, TextStyle1212, Measurement } from '@package/uriel/atoms/icons';

export const metadata = [
    {
        key: "design-system",
        id: Snowflake.generate(),
        name: "Design System",
        useComponent: false,
        icon: <Figma />
    },
    {
        key: "design-system/color",
        icon: <ColorPalette />
    },
    {
        key: "design-system/text-styles",
        icon: <TextStyle1212 />
    },
    {
        key: "design-system/measurement",
        icon: <Measurement />
    },
]


export const routeConfig: RouteObject[] = [
    {
        id: Snowflake.generate(), path: 'design-system', children: [
            {
                id: Snowflake.generate(),
                path: 'color',
                Component: lazy(() => import('@package/gabriel/admin/design-system/color/Page'))
            },
            {
                id: Snowflake.generate(),
                path: 'text-styles',
                Component: lazy(() => import('@package/gabriel/admin/design-system/text-styles/Page'))
            },
            {
                id: Snowflake.generate(),
                path: 'measurement',
                Component: lazy(() => import('@package/gabriel/admin/design-system/measurement/Page'))
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