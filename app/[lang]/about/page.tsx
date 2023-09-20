import Link from 'next/link';
import { IPageProps, IPageParam } from '@/package/raphael';

export default function Page(props: IPageProps<IPageParam, any>) {
    const { params: { lang } } = props;

    return (
        <>
            <h1>Hi from about page!</h1>
            <Link href={`/${lang}`}>
                back
            </Link>
        </>
    );
}
