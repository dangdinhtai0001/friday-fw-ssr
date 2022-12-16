// react imports
// 3rd imports
// local imports

const useTabs = (props: any, context: any, helper: any) => {

    const handleOnChange = (
        event: React.SyntheticEvent<Element, Event>,
        tabId: string | number | boolean
    ) => {
        // update lại tab id mỗi khi thay đổi
        helper.commitActivedId(tabId);

        // Gọi hàm onchange từ props
        props.onChange?.(event, tabId, context, helper);
    };
    return {
        handleOnChange
    };
}

export default useTabs;