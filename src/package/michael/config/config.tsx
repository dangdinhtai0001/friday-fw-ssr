import { Snowflake } from "@theinternetfolks/snowflake";
import _ from 'lodash';

import { RouterConfig } from "./_types";
import { ICategoryDef } from '@package/raphael/types/application.types'
import { ColorPalette, Figma, Measurement, TextStyle1212, Component, Component1 } from "@/package/uriel/atoms/icons";

export const _routerConfig: RouterConfig[] = [
    // ========= || Group:: Documents || ===================================================================================================================================================
    {
        id: Snowflake.generate(),
        name: 'Design',
        key: '__design',
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
    // ========= || Group:: Components || ===============================================================
    {
        id: Snowflake.generate(),
        name: 'Components',
        key: '__components',
        type: 'group'
        // icon: <Component />
    },
    {
        id: Snowflake.generate(),
        name: 'Base components',
        key: '/admin/components/base',
        path: '/admin/components/base',
        icon: <Component1 />,
    },
    {
        id: Snowflake.generate(),
        name: 'Cards',
        key: '/admin/components/base/card',
        lazy: async () => {
            let Page = await import('@package/gabriel/admin/components/base/card/Page');
            return { Component: Page.default };
        },
        icon: <ColorPalette />
    },
];