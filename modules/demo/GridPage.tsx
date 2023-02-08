import { Grid as GrynffindorGrid } from '@packages/gryffindor/grid';
import { ToolboxDef } from '@packages/gryffindor/grid/common-types.d';

const GridPage = () => {
    const columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];

    const toolboxDef: ToolboxDef =
    {
        disableRule: () => { },
        visibleRule: () => { return { '__edit': true, '__remove': true, '__details': true, } },
        itemDefs: [
            {
                key: '__edit',
                isDefault: true
            },
            {
                key: '__remove',
                isDefault: true
            },
            {
                key: '__details',
                isDefault: true
            },
        ]
    }
        ;
    return (
        <>
            <GrynffindorGrid
                height='20rem'
                columnDefs={columnDefs}
                toolboxDef={toolboxDef}
            ></GrynffindorGrid>
        </>
    );
};

export default GridPage;