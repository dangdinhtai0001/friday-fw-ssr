import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import { IconType } from 'react-icons';

export interface RouteConfig extends
    Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<IndexRouteObject, 'children' | 'index'> {
    title: string;
    icon: IconType;
    displayOnSidebar?: boolean;
    children?: RouteConfig[];
};

export interface SidebarConfig {
    id: string | number;
    title: string;
    icon: IconType;
    children?: SidebarConfig[];
}



export const getSidebarConfig = (config?: RouteConfig[]): SidebarConfig[] | undefined => {
    if (!config) {
        return undefined;
    }

    return routeConfig.map((config, index): SidebarConfig => {
        return {
            title: config.title,
            icon: config.icon,
            id: index,
            children: getSidebarConfig(config.children)
        }
    })
};

export const getRouteConfig = (config: RouteConfig[]): RouteConfig {
    
}

export const routeConfig: RouteConfig[] = [

]