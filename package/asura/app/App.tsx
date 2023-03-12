// next import
import type { AppProps } from 'next/app';
// 3rd import
import DevaThemeProvider from './ThemeProvider';
// local import;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DevaThemeProvider>
      <Component {...pageProps} />
    </DevaThemeProvider>
  );
};

export default App;
