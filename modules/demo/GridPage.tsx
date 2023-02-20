import { Grid as GrynffindorGrid } from '@packages/gryffindor/grid';
import GrynffindorGridPopup from '@packages/gryffindor/grid/collector/GridPopup';
import { ToolboxDef } from '@packages/gryffindor/grid/common-types.d';
import { PopupDef_OnActiveAction } from '@packages/gryffindor/grid/Grid.d';
import GridPopupComponent from './GridPopupComponent';

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
    };

    const popupDef = {
        initialHeight: 500,
        initialWidth: 600,
        minHeight: 200,
        minWidth: 600,
        actions: [
            { key: "key-0001", label: "Xác nhận", disabled: false, visible: true, others: { theme: 'primary' } },
            { key: "key-0002", label: "Hủy", disabled: false, visible: true, isClose: true },
        ],
        onActiveAction: (props: PopupDef_OnActiveAction) => {
            let { key } = props.actionDef;

            if (key === 'key-0002') {
                console.log(" Làm một vài thứ gì đó rồi ấn nút cancel");

                return { isClose: false }
            }

            return { isClose: false };
        },
        //
        defaultValue: "id-000"
    }
    return (
        <>
            <GrynffindorGrid
                height='20rem'
                columnDefs={columnDefs}
                toolboxDef={toolboxDef}
                popupDef={popupDef}
            >
                <GrynffindorGridPopup type="__edit" id='id-000' title="GrynffindorGridPopup-0">
                    <GridPopupComponent />
                </GrynffindorGridPopup>
                <GrynffindorGridPopup type="__edit" id='id-001' title="GrynffindorGridPopup-1">
                    <div>GrynffindorGridPopup-1</div>
                </GrynffindorGridPopup>
            </GrynffindorGrid>
        </>
    );
};

export default GridPage;