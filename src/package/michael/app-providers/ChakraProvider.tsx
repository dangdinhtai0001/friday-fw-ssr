import { ChakraProvider } from '@chakra-ui/react';

import chakraTheme from '@/package/michael/theme';
function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={chakraTheme}>
            {children}
        </ChakraProvider>
    )
};

export default Providers;