import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
