import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

export interface IRouteConfig extends
    Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<IndexRouteObject, 'children' | 'index'> {
    children?: IRouteConfig[];
};

export interface ISidebarConfig {
    title?: string;
    items?: ISidebarConfig[];
    isGroup?: boolean;
}