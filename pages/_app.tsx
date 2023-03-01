import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { light, dark } from '@/theme/theme';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App);

// Trong trang của bạn, import useTranslation để sử dụng i18n như sau: