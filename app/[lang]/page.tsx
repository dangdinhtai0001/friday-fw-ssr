import Link from 'next/link';

import { IPageProps, IPageParam } from '@/package/raphael';
import { useTranslation } from '@/package/michael/i18n';

export default async function Page(props: IPageProps<IPageParam, any>) {
    const { params: { lang } } = props;

    const { t } = await useTranslation(lang, 'common')

    return (
        <>
            <h1>{t('title')}</h1>
            <Link href={`/${lang}/about`}>
                about page
            </Link>
        </>
    );
}
