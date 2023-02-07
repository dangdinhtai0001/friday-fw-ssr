import { Grid as GrynffindorGrid } from '@packages/gryffindor/grid';
import { ToolboxItem } from '@packages/gryffindor/grid/renderer/toolbox-cell/ToolboxCellRenderer.d';
const GridPage = () => {
    const columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];

    const toolboxItemDefs: ToolboxItem[] = [
        {
            key: '__edit',
            isDefault: true,
            toolboxDisabledRule: (props) => { return { '__edit': false } },
            toolboxVisibleRule: (props) => { return { '__edit': true } }
        }
    ];
    return (
        <>
            <GrynffindorGrid
                height='20rem'
                columnDefs={columnDefs}
                toolboxItemDefs={toolboxItemDefs}
            ></GrynffindorGrid>
        </>
    );
};

export default GridPage;