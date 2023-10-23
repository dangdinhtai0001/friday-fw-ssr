import { Outlet, useNavigation } from "react-router-dom";

import { AdminLayout } from '@package/uriel/templates/admin-layout';
import Loading from '@package/gabriel/admin/Loading';
import { Box } from "@chakra-ui/react";
export default function Layout() {
    const navigation = useNavigation();

    return (
        <AdminLayout  >
            {navigation.state !== "idle" && <Loading />}
            <Box overflowX='hidden' overflowY='auto' h='full'>
                <Outlet />
            </Box>
        </AdminLayout>
    );
}
