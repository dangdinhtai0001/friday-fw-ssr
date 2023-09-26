import { ChakraUIProvider } from '@/package/michael';
import { MainLayout } from '@/package/gabriel/main-layout';

function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body >
        <ChakraUIProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </ChakraUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;