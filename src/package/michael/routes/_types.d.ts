import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import { IconType } from 'react-icons';

export interface RouteConfig extends
    Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<IndexRouteObject, 'children' | 'index'> {
    title?: string;
    icon?: IconType;
    displayOnSidebar?: boolean;
    isDefaultSidebarItem?: boolean;
    children?: RouteConfig[];
    query?: Record<string, string>;
};

export interface SidebarConfig {
    id?: string;
    isDefault?: boolean;
    title?: string;
    icon?: IconType;
    path?: string;
    query?: Record<string, string>;
    _children?: SidebarConfig[] | null;
}