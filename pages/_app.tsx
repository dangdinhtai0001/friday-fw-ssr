import { ThemeProvider } from '@mui/system';
import type { AppProps } from 'next/app';
// local import
import { lightTheme } from '@/utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
