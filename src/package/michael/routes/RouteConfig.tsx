import { IRouteConfig, ISidebarConfig } from "./_types.d";

import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";


export const routeConfig: IRouteConfig[] = [

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
                    // children: config
                }
            ],
        }
    ]
};
export const getSidebarConfig = (config?: IRouteConfig[], parentPath = ''): ISidebarConfig[] | null => { return null; };