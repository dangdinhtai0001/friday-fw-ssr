import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { light, dark } from '@/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
