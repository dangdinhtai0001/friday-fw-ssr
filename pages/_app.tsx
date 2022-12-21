import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
