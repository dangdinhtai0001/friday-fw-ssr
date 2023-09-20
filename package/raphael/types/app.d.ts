export interface IPageParam {
    lang: string;
}

export interface IPageProps<TParam extends IPageParam, TSearchParam> {
    params: TParam;
    searchParams: TSearchParam;
}

export interface ILayoutProps<TParam extends IPageParam> {
    params: TParam;
    children: React.ReactNode;
}