import { useGridContext } from "@packages/gryffindor/grid/GridContext";

const GridPopupComponent = () => {
    const { context } = useGridContext();
    return (
        <>
            <div>
                {JSON.stringify(context.processingRow)}
            </div>
        </>
    );
}

export default GridPopupComponent;