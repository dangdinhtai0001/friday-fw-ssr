import { Snowflake } from "@theinternetfolks/snowflake";
import { RouteObject } from 'react-router-dom';
import _ from 'lodash';

import { RouterConfig } from "./_types";
import { ICategoryDef } from '@package/raphael/types/application.types'
import { ColorPalette, Figma, Measurement, TextStyle1212, Component, Component1 } from "@/package/uriel/atoms/icons";

export const _routerConfig: RouterConfig[] = [
    // Documents || ===================================================================================================================================================
    {
        id: Snowflake.generate(),
        name: 'Documents',
        key: '__documents',
        type: 'group'
    },
    // Design system || ===============================================================
    {
        id: Snowflake.generate(),
        name: 'Design system',
        key: '/admin/design-system',
        icon: <Figma />
    },
    {
        id: Snowflake.generate(),
        name: 'Color palette',
        key: '/admin/design-system/color',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/design-system/color/Page');
            return { Component: Page.default };
        },
        icon: <ColorPalette />
    },
    {
        id: Snowflake.generate(),
        name: 'Text styles',
        key: '/admin/design-system/text-styles',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/design-system/text-styles/Page');
            return { Component: Page.default };
        },
        icon: <TextStyle1212 />
    },
    {
        id: Snowflake.generate(),
        name: 'Measurement',
        key: '/admin/design-system/measurement',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/design-system/measurement/Page');
            return { Component: Page.default };
        },
        icon: <Measurement />
    },
    // Components || ===============================================================
    {
        id: Snowflake.generate(),
        name: 'Components',
        key: '/admin/components',
        icon: <Component />
    },
    {
        id: Snowflake.generate(),
        name: 'Base components',
        key: '/admin/components/base',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/components/base/Page');
            return { Component: Page.default };
        },
        icon: <Component1 />
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

export function getCategories(): ICategoryDef[] {
    return [
        {
            ...getCategory("__documents"), items: [
                {
                    ...getCategory("/admin/design-system"), items: [
                        { ...getCategory("/admin/design-system/measurement") },
                        { ...getCategory("/admin/design-system/color") },
                        { ...getCategory("/admin/design-system/text-styles") },
                    ]
                },
                {
                    ...getCategory("/admin/components"), items: [
                        { ...getCategory("/admin/components/base") },
                    ]
                }
            ]
        }
    ]
}

export const categoryDefs: ICategoryDef[] = getCategories();