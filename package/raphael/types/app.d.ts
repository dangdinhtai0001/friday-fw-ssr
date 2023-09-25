export interface IPageProps {
    params: Record<string, string>;
    searchParams: Record<string, string>;
}

export interface ILayoutProps {
    children: React.ReactNode;
}