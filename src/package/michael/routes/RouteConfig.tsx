
import RootLayout from '@package/gabriel/Layout';
import AdminLayout from '@package/gabriel/admin/Layout';
import ErrorPage from "@package/gabriel/Error";
import { RouteConfig, SidebarConfig } from './_types.d';
// ---------------------------------- || icon || ----------------------------------
import { GiArchiveRegister } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';
import { MdOutlineContactSupport } from 'react-icons/md';

// ---------------------------------- || page || ----------------------------------
import RecruitmentPage from '@package/gabriel/admin/recruitment/Page';
import EnrollmentPage from '@package/gabriel/admin/enrollment/Page';
import HelpPage from '@package/gabriel/admin/help/Page';

export const routeConfig: RouteConfig[] = [
    // -------------------------- || recruitment || --------------------------
    {
        title: 'recruitment',
        icon: GiArchiveRegister,
        displayOnSidebar: true,
        path: 'recruitment',
        element: <RecruitmentPage />
    },
    // -------------------------- || enrollment || --------------------------
    {
        title: 'enrollment',
        icon: ImProfile,
        displayOnSidebar: true,
        path: 'enrollment',
        element: <EnrollmentPage />
    },
    {
        title: 'foo',
        icon: GiArchiveRegister,
        displayOnSidebar: true,
        isDefaultSidebarItem: false,
        path: 'foo',
        children: [
            {
                title: 'bar',
                icon: GiArchiveRegister,
                displayOnSidebar: true,
                path: 'bar',
                query: { foo: 'bar' },
                element: <EnrollmentPage />
            }
        ]
    },
    // -------------------------- || default || --------------------------
    {
        title: 'Help & Support',
        icon: MdOutlineContactSupport,
        displayOnSidebar: true,
        isDefaultSidebarItem: true,
        path: 'help',
        element: <HelpPage />
    },
];

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

export const getSidebarConfig = (config?: RouteConfig[], parentPath = ''): SidebarConfig[] | null => {
    if (!config) {
        return null;
    }

    return config.filter(configItem => configItem.displayOnSidebar)
        .map((configItem) => {
            const path = `${parentPath}/${configItem.path}`;

            return {
                id: String(Math.random()),
                isDefault: configItem.isDefaultSidebarItem,
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