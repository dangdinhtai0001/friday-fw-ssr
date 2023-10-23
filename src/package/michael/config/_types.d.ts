import React from 'react';
import { RouteObject } from 'react-router-dom';

export interface RouterConfig {
    id: string;
    key: string;
    name?: string;
    path?: string;
    lazy?: RouteObject['lazy'];
    type?: 'group';
    icon?: React.ReactNode;
}
