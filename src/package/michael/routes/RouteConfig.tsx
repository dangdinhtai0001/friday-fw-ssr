import { IRouteConfig, ISidebarConfig } from "./_types.d";

export const routeConfig: IRouteConfig[] = [];
export const getRouteConfig = (config: IRouteConfig[]): IRouteConfig[] => { return []; };
export const getSidebarConfig = (config?: IRouteConfig[], parentPath = ''): ISidebarConfig[] | null => { return null; };