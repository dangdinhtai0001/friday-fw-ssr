import { Suspense } from "react";

import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import { IconType } from 'react-icons';
import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import LecturerPage from '@package/gabriel/admin/lecturer/Page';

export interface RouteConfig extends
    Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<IndexRouteObject, 'children' | 'index'> {
    title?: string;
    icon?: IconType;
    displayOnSidebar?: boolean;
    children?: RouteConfig[];
};

export interface SidebarConfig {
    id: string | number;
    title?: string;
    icon?: IconType;
    children?: SidebarConfig[];
}



export const getSidebarConfig = (config?: RouteConfig[]): SidebarConfig[] | undefined => {
    if (!config) {
        return undefined;
    }

    return routeConfig.map((config, index): SidebarConfig => {
        return {
            title: config.title,
            icon: config.icon,
            id: index,
            children: getSidebarConfig(config.children)
        }
    })
};

export const getRouteConfig = (config: RouteConfig[]): RouteConfig[] => {
    return [
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: config,
        }
    ]
}

export const routeConfig: RouteConfig[] = [
    {
        path: 'admin',
        element: <AdminLayout />,
        children: [
            {
                path: "lecturer",
                children: [
                    {
                        path: "info",
                        element: (
                            <Suspense>
                                <LecturerPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "salary",
                        element: (
                            <Suspense>
                                <LecturerPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "feedback",
                        element: (
                            <Suspense>
                                <LecturerPage />
                            </Suspense>
                        )
                    }
                ]
            },

        ]
    },
];