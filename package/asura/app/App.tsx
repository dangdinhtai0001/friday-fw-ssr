// next import
import type { AppProps } from 'next/app';
// 3rd import
import ThemeProvider from './ThemeProvider';
// local import;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
