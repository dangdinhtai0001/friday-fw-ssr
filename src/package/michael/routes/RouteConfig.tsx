import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";

import { GiArchiveRegister } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';

import RecruitmentPage from '@package/gabriel/admin/recruitment/Page';
import EnrollmentPage from '@package/gabriel/admin/enrollment/Page';

import { RouteConfig, SidebarConfig } from './_types.d';


// export const getSidebarConfig = (config?: RouteConfig[]): SidebarConfig[] | null => {
//     if (!config) {
//         return null;
//     }

//     return config.map((configItem, index): SidebarConfig => {
//         return {
//             id: String(index),
//             title: configItem.title,
//             icon: configItem.icon,
//             path: configItem.path,
//             query: configItem.query,
//             _children: configItem.children ? getSidebarConfig(configItem.children) : null
//         }
//     });
// };

export const getSidebarConfig = (config?: RouteConfig[], parentPath = ''): SidebarConfig[] | null => {
    if (!config) {
      return null; 
    }
  
    return config.map((configItem) => {
      const path = `${parentPath}/${configItem.path}`;
  
      return {
        id: String(Math.random()),
        title: configItem.title, 
        icon: configItem.icon,
        path: path,
        query: configItem.query,
        _children: configItem.children 
          ? getSidebarConfig(configItem.children, path)
          : null
      };
    });
  };

export const getRouteConfig = (config: RouteConfig[]): RouteConfig[] => {
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
}

export const routeConfig: RouteConfig[] = [
    {
        title: 'recruitment',
        icon: GiArchiveRegister,
        path: 'recruitment',
        element: <RecruitmentPage />
    },
    {
        title: 'enrollment',
        icon: ImProfile,
        path: 'enrollment',
        element: <EnrollmentPage />
    },
    {
        title: 'foo',
        icon: GiArchiveRegister,
        path: 'foo',
        children: [
            {
                title: 'bar',
                icon: GiArchiveRegister,
                path: 'bar',
                query: {foo: 'bar'},
                element: <EnrollmentPage />
            }
        ]
    },
];