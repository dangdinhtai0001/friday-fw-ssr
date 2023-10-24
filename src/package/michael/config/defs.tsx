import { RouteObject } from 'react-router-dom';
import _ from 'lodash';

import { ICategoryDef } from '@package/raphael/types/application.types';

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import { getCategory, getRouterObject } from "./helpers";

export function getCategories(): ICategoryDef[] {
    return [
        {
            ...getCategory("__design"), items: [
                {
                    ...getCategory("/admin/design-system"), items: [
                        { ...getCategory("/admin/design-system/measurement") },
                        { ...getCategory("/admin/design-system/color") },
                        { ...getCategory("/admin/design-system/text-styles") },
                    ]
                },
            ]
        },
        {
            ...getCategory("__components"), items: [
                {
                    ...getCategory("/admin/components/base"), items: [
                        { ...getCategory("/admin/components/base/card") },
                    ]
                },
            ]
        }
    ]
};

// --------------------------------------------------------------------------------------------------------------------------------

export const routeConfig: any[] = [
    {
        ...getRouterObject("/admin/design-system"), children: [
            { ...getRouterObject("/admin/design-system/color") },
            { ...getRouterObject("/admin/design-system/text-styles") },
            { ...getRouterObject("/admin/design-system/measurement") },
        ],
    },
    {
        ...getRouterObject("/admin/components/base"), children: [
            { ...getRouterObject("/admin/components/base/card") },

        ],
    },
]

export const getRouteConfig = (config: RouteObject[]): RouteObject[] => {
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

export const categoryDefs: ICategoryDef[] = getCategories();
export const routeObjectDefs: RouteObject[] = getRouteConfig(routeConfig);
