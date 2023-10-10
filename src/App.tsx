import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, } from "react-router-dom";

import { router } from '@package/michael/routes';
import chakraTheme from '@/package/michael/theme';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
