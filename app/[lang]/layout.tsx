import { dir } from 'i18next';
import { ILayoutProps, IPageParam } from '@/package/raphael/types';
import { languages } from '@/package/michael/i18n';

import SidebarWithHeader from '@/package/uriel/sidebar-with-header';

function RootLayout(props: ILayoutProps<IPageParam>) {
  const { children, params: { lang } } = props;

  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body style={{ margin: 0 }}>
        <SidebarWithHeader>
          {children}
        </SidebarWithHeader>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
};

export default RootLayout;
