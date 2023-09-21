import { dir } from 'i18next';
import { ILayoutProps, IPageParam } from '@/package/raphael/types';
import { languages } from '@/package/michael/i18n';
function RootLayout(props: ILayoutProps<IPageParam>) {
  const { children, params: { lang } } = props;

  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
};

export default RootLayout;
