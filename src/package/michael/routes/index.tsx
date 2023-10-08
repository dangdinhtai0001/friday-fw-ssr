import { createBrowserRouter, } from "react-router-dom";
import { routeConfig, getRouteConfig } from './RouteConfig';

export const router = createBrowserRouter(getRouteConfig(routeConfig));