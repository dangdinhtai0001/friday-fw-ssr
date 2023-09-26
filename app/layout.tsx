import { ChakraUIProvider } from '@/package/michael';

function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>
          {children}
        </ChakraUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;