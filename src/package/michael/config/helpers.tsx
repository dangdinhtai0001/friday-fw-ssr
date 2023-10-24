import { RouteObject } from 'react-router-dom';
import _ from 'lodash';

import { ICategoryDef } from '@package/raphael/types/application.types';
import { _routerConfig } from './config';

function getPath(key: string, path?: string): string {
    if (path) {
        return path;
    } else {
        const segments = key.split('/');

        return segments[segments.length - 1];
    }

}

export function getRouterObject(_key: string): RouteObject {

    let config = _.find(_routerConfig, (obj) => { return obj.key === _key; });

    if (!config) {
        return {};
    }

    const { id, key, path, lazy } = config;

    return {
        id: id,
        path: getPath(key, path),
        lazy: lazy
    }
};

export function getCategory(_key: string): ICategoryDef {
    let config = _.find(_routerConfig, (obj) => { return obj.key === _key; });

    if (!config) {
        return {};
    }

    const { id, key, path, name, type, icon } = config;

    return {
        id: id,
        key: key,
        label: name,
        type: type,
        url: path ? path : key,
        icon: icon
    }
};