import { RouteObject } from 'react-router-dom';

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import { getRouterObject, _routerConfig } from '@package/michael/config'

export const routeConfig: any[] = [{
    ...getRouterObject("/admin/design-system"), children: [
        { ...getRouterObject("/admin/design-system/color") },
        { ...getRouterObject("/admin/design-system/text-styles") },
        { ...getRouterObject("/admin/design-system/measurement") },
    ]
}]

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