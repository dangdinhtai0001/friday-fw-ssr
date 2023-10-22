import { Snowflake } from "@theinternetfolks/snowflake";
import { RouteObject } from 'react-router-dom';
import _ from 'lodash';

import { RouterConfig } from "./_types";
import { ICategoryDef } from '@package/raphael/types/application.types'

export const _routerConfig: RouterConfig[] = [
    {
        id: Snowflake.generate(),
        name: 'Design system',
        key: '/admin/design-system',
    },
    {
        id: Snowflake.generate(),
        name: 'Color palette',
        key: '/admin/design-system/color',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/design-system/color/Page');
            return { Component: Page.default };
        }
    },
    {
        id: Snowflake.generate(),
        name: 'Text styles',
        key: '/admin/design-system/text-styles',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/design-system/text-styles/Page');
            return { Component: Page.default };
        }
    },
    {
        id: Snowflake.generate(),
        name: 'Measurement',
        key: '/admin/design-system/measurement',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/design-system/measurement/Page');
            return { Component: Page.default };
        }
    },
];

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

export function getCategoriesState(_key: string) {
    let config = _.find(_routerConfig, (obj) => { return obj.key === _key; });

    if (!config) {
        return {};
    }

    const { id, key, path, iconAlias, name, type } = config;

    return {
        id: id,
        key: key,
        label: name,
        type: type,
        url: getPath(key, path),
        icon: iconAlias
    }
}