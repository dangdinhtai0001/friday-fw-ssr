import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import { IconType } from 'react-icons';
import { GiMoneyStack, GiTeacher } from 'react-icons/gi';
import { Suspense } from "react";
import { createBrowserRouter, } from "react-router-dom";

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

const routeConfig: RouteConfig[] = [
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
                        displayOnSidebar: true,
                        title: 'Giảng viên',
                        icon: GiTeacher,
                        path: "lecturer",
                        children: [
                            {
                                displayOnSidebar: true,
                                title: 'Giảng viên',
                                icon: GiTeacher,
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
        ],
    },
];
function getSidebarRoutes(routeConfig: any, _path: any): any{
    const sidebarRoutes = [];

    let path;
    for (const route of routeConfig) {
        if (_path === "/") {
            path = route.path;
        } else {
            path = _path + "" + route.path;
        }

        if (route.children) {
            const sidebarChildRoutes = getSidebarRoutes(route.children, path);

            if (sidebarChildRoutes.length > 0) {
                sidebarRoutes.push({
                    title: route.title,
                    icon: route.icon,
                    path: path,
                    children: sidebarChildRoutes,
                });
            }
        } else if (route.displayOnSidebar) {
            sidebarRoutes.push({
                title: route.title,
                icon: route.icon,
                path: path,
                children: route.children,
            });
        }
    }

    return sidebarRoutes;
}

export const router = createBrowserRouter(routeConfig);
