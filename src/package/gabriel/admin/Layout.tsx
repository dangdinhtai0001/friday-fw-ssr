import { Outlet } from "react-router-dom";

import { AdminLayout } from '@package/uriel/templates/admin-layout';
export default function Layout() {
    return (
        <AdminLayout  >
            <Outlet />
        </AdminLayout>
    );
}
