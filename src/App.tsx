import { RouterProvider, } from "react-router-dom";

import { router } from '@package/michael/routes';
import { ChakraUIProvider } from '@package/michael/app-providers';

export default function App() {
  return (
    <ChakraUIProvider>
      <RouterProvider router={router} />
    </ChakraUIProvider>
  );
}
