import { ChakraProvider } from '@/package/michael';

function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;