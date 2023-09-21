import Link from 'next/link';

import { IPageProps, IPageParam } from '@/package/raphael';
import { useAsyncTranslation } from '@/package/michael/i18n';

async function Page(props: IPageProps<IPageParam, any>) {
    const { params: { lang } } = props;

    const { t } = await useAsyncTranslation(lang);

    return (
        <>
            <h1>{t('title')}</h1>
            <Link href={`/${lang}/about`}>
                about page
            </Link>
        </>
    );
}

export default Page;
