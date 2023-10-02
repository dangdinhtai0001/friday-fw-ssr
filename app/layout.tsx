import { ChakraUIProvider } from '@/package/michael';
import { MainLayout } from '@/package/uriel/templates/main-layout';

function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ height: '100%' }}>
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