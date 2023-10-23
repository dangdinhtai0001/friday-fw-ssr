Quy trình thêm 1 page mới 

- Tạo nội dung page mới theo cấu trúc thư mục trùng với url c nó. Ví dụ cần tạo page cho url: `/admin/components/base` th phải tạo file `Page.tsx` ở thư mục `@package/gabriel/components/base`
- Trong file cấu hình `@package/michael/config/RouterCategoryConfig.tsx` thêm một bản ghi vào biến `_routerConfig`. Ví dụ: 
    ```js
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
    ```
- Nếu cần tạo folder cho nó thì như sau: 
    ```js
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
    ```
- Đi đến file `@package\michael\routes\RouteConfig.tsx` và cấu hình cho phù hợp. Ví dụ, nếu đang có cấu hifnh như sau: 
    ```js
    export const routeConfig: any[] = [
        {
            ...getRouterObject("/admin/design-system"), children: [
                { ...getRouterObject("/admin/design-system/color") },
                { ...getRouterObject("/admin/design-system/text-styles") },
                { ...getRouterObject("/admin/design-system/measurement") },
            ],
        }
    ]
    ```
    Sẽ sửa thành:
    ```js
    export const routeConfig: any[] = [
        {
            ...getRouterObject("/admin/design-system"), children: [
                { ...getRouterObject("/admin/design-system/color") },
                { ...getRouterObject("/admin/design-system/text-styles") },
                { ...getRouterObject("/admin/design-system/measurement") },
            ],
        },
        // Thêm đoạn sau để cấu hình /base là con của /components
        {
            ...getRouterObject("/admin/components"), children: [
                { ...getRouterObject("/admin/components/base") },
            ]
        }
    ]    
    ```
- Nếu cần cho lên sidebar thì phải vào sửa hàm `getCategories` ở file `@package/michael/config/RouterCategoryConfig.tsx`. Ví dụ:

    ```js
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
                    }
                ]
            }
        ]
    }
    ```
    thành
    ```js
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
                    // Thêm đoạn sau
                    {
                        ...getCategory("/admin/components"), items: [
                            { ...getCategory("/admin/components/base") },
                        ]
                    }
                ]
            }
        ]
    }
    ```