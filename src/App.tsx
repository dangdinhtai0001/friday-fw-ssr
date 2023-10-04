import { RouterProvider, } from "react-router-dom";

import { router } from '@package/michael/routes';

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
